/**
 * Created by aRTie on 21/08/2017.
 */

import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { Subject } from 'rxjs/Rx';
import { AuthService } from './authentication.service';

@Injectable()
export class WebService {
    private BASE_URL = 'http://localhost:8888/';
    private privateRelease = [];

    private releaseSubject = new Subject();

    private messages = this.releaseSubject.asObservable();

    constructor(
        private http: Http,
        private popupInfo: MdSnackBar,
        private auth: AuthService
    ) {
        this.getMessages(undefined);
    }


    getMessages(filter) {
        filter = (filter) ? '/' + filter : ''
        this.http.get(this.BASE_URL + 'api/release' + filter).subscribe(res => {
            this.privateRelease = res.json();
            this.releaseSubject.next(this.privateRelease);
        }, err => {
            this.popupInfo.open('oh noes: ' + err, 'X', {duration: 3000});
        });
    }

    async postMessages(oneMessage: any) {
        const bodyBag = await this.http.post(this.BASE_URL + 'api/oneupdate', oneMessage).toPromise();
        if (bodyBag.status === 200) {
            this.privateRelease.push(bodyBag.json());
            this.releaseSubject.next(this.privateRelease);
        } else {
            alert('something went horribly wrong');
        }
    }

    getUser() {
        return this.http.get(this.BASE_URL + 'api/current-user', this.auth.tokenHeader).map(res => res.json());
    }

    saveUser(userData) {
        return this.http.post(this.BASE_URL + 'api/current-user', userData, this.auth.tokenHeader).map(res => res.json());
    }
}
