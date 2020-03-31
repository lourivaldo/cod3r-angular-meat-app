var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var RadioComponent = RadioComponent_1 = (function () {
    function RadioComponent() {
    }
    RadioComponent.prototype.ngOnInit = function () {
    };
    RadioComponent.prototype.setValue = function (value) {
        this.value = value;
        this.onChange(this.value);
    };
    RadioComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    RadioComponent.prototype.registerOnTouched = function (fn) {
    };
    RadioComponent.prototype.setDisabledState = function (isDisabled) {
    };
    RadioComponent.prototype.writeValue = function (obj) {
        this.value = obj;
    };
    return RadioComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Array)
], RadioComponent.prototype, "options", void 0);
RadioComponent = RadioComponent_1 = __decorate([
    Component({
        selector: 'mt-radio',
        templateUrl: './radio.component.html',
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(function () { return RadioComponent_1; }),
                multi: true
            }
        ]
    }),
    __metadata("design:paramtypes", [])
], RadioComponent);
export { RadioComponent };
var RadioComponent_1;
//# sourceMappingURL=radio.component.js.map