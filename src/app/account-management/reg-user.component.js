"use strict";
/**
 * Created by aRTie on 29/08/2017.
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
var forms_1 = require("@angular/forms");
var authentication_service_1 = require("../services/authentication.service");
var RegUserComponent = (function () {
    function RegUserComponent(formBuilder, auth) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.form = this.formBuilder.group({
            user: ['', forms_1.Validators.required],
            email: ['', [forms_1.Validators.required, isEmailvalid()]],
            pass: ['', forms_1.Validators.required],
            rePass: ['', forms_1.Validators.required],
        }, { validator: areFieldsMatching('pass', 'rePass') });
    }
    RegUserComponent.prototype.onSubmit = function () {
        console.log(this.form.value);
        console.log(this.form.errors);
        this.auth.register(this.form.value);
    };
    RegUserComponent.prototype.isValid = function (thingy) {
        return this.form.controls[thingy].invalid && this.form.controls[thingy].touched;
    };
    return RegUserComponent;
}());
RegUserComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'reg-user',
        templateUrl: "reg-user.component.html",
        styles: ["\n        .error {\n            background-color: #FFF0F0;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        authentication_service_1.AuthService])
], RegUserComponent);
exports.RegUserComponent = RegUserComponent;
function areFieldsMatching(specimenA, specimenB) {
    return function (form) {
        if (form.controls[specimenA].value !== form.controls[specimenB].value) {
            return { isNotMatching: true };
        }
    };
}
// Validators actually need to return a function... they aren't just the function that does the validating...
function isEmailvalid() {
    return function (control) {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(control.value) ? null : { invalidEmail: true };
    };
}
//# sourceMappingURL=reg-user.component.js.map