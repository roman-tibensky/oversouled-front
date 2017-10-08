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
var web_service_1 = require("../services/web.service");
var EditUserComponent = (function () {
    function EditUserComponent(formBuilder, webSer) {
        this.formBuilder = formBuilder;
        this.webSer = webSer;
        this.form = this.formBuilder.group({
            firstName: ['', forms_1.Validators.required],
            lastName: ['', [forms_1.Validators.required]],
        });
    }
    EditUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.webSer.getUser().subscribe(function (res) {
            _this.form.value.firstName = res.firstName;
            _this.form.value.lastName = res.lastName;
        });
    };
    EditUserComponent.prototype.onSubmit = function () {
        console.log(this.form.value);
        console.log(this.form.errors);
        this.webSer.saveUser(this.form.value).subscribe(function (res) { return console.log(res); });
    };
    return EditUserComponent;
}());
EditUserComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'edit-user',
        templateUrl: "edit-user.component.html",
        styles: ["\n        .error {\n            background-color: #FFF0F0;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        web_service_1.WebService])
], EditUserComponent);
exports.EditUserComponent = EditUserComponent;
//# sourceMappingURL=edit-user.component.js.map