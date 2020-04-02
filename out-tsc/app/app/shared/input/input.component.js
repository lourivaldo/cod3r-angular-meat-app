var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ContentChild, Input } from '@angular/core';
import { FormControlName, NgModel } from '@angular/forms';
var InputComponent = /** @class */ (function () {
    function InputComponent() {
        this.showTip = true;
    }
    InputComponent.prototype.ngOnInit = function () {
    };
    InputComponent.prototype.ngAfterContentInit = function () {
        this.input = this.model || this.control;
        if (this.input === undefined) {
            throw new Error("This component requires an ngModel or FormControlName");
        }
    };
    InputComponent.prototype.hasSuccess = function () {
        return this.input.valid && (this.input.dirty || this.input.touched);
    };
    InputComponent.prototype.hasError = function () {
        return this.input.invalid && (this.input.dirty || this.input.touched);
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], InputComponent.prototype, "label", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], InputComponent.prototype, "errorMessage", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], InputComponent.prototype, "showTip", void 0);
    __decorate([
        ContentChild(NgModel),
        __metadata("design:type", typeof (_a = typeof NgModel !== "undefined" && NgModel) === "function" && _a || Object)
    ], InputComponent.prototype, "model", void 0);
    __decorate([
        ContentChild(FormControlName),
        __metadata("design:type", typeof (_b = typeof FormControlName !== "undefined" && FormControlName) === "function" && _b || Object)
    ], InputComponent.prototype, "control", void 0);
    InputComponent = __decorate([
        Component({
            selector: 'mt-input-container',
            templateUrl: './input.component.html',
        }),
        __metadata("design:paramtypes", [])
    ], InputComponent);
    return InputComponent;
    var _a, _b;
}());
export { InputComponent };
//# sourceMappingURL=input.component.js.map