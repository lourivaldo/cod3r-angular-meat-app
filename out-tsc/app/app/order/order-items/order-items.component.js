var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Input, Output } from '@angular/core';
var OrderItemsComponent = (function () {
    function OrderItemsComponent() {
        this.increaseQuantity = new EventEmitter();
        this.decreaseQuantity = new EventEmitter();
        this.remove = new EventEmitter();
    }
    OrderItemsComponent.prototype.ngOnInit = function () {
    };
    OrderItemsComponent.prototype.emitIncreaseQuantity = function (item) {
        this.increaseQuantity.emit(item);
    };
    OrderItemsComponent.prototype.emitDecreaseQuantity = function (item) {
        this.decreaseQuantity.emit(item);
    };
    OrderItemsComponent.prototype.emitRemove = function (item) {
        this.remove.emit(item);
    };
    return OrderItemsComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Array)
], OrderItemsComponent.prototype, "items", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], OrderItemsComponent.prototype, "increaseQuantity", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], OrderItemsComponent.prototype, "decreaseQuantity", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], OrderItemsComponent.prototype, "remove", void 0);
OrderItemsComponent = __decorate([
    Component({
        selector: 'mt-order-items',
        templateUrl: './order-items.component.html',
    }),
    __metadata("design:paramtypes", [])
], OrderItemsComponent);
export { OrderItemsComponent };
//# sourceMappingURL=order-items.component.js.map