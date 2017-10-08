"use strict";
/**
 * Created by aRTie on 09/09/2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var authentication_service_1 = require("../services/authentication.service");
var LoginComponent = (function () {
    function LoginComponent(auth) {
        this.auth = auth;
        this.reg = {
            user: '',
            pass: ''
        };
    }
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        template: "\n        <md-card>\n            <md-input-container>\n                <input mdInput [(ngModel)]=\"reg.user\" placeholder=\"username\">\n            </md-input-container>\n            <md-input-container>\n                <input mdInput type=\"password\" [(ngModel)]=\"reg.pass\" placeholder=\"password\">\n            </md-input-container>\n            <button md-button md-raised-button color=\"primary\" (click)=\"auth.login(reg)\">Login</button>\n        </md-card>\n    "
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map