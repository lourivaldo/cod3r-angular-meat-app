var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { OrderService } from './order.service';
import { OrderItem } from './order.model';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
var OrderComponent = /** @class */ (function () {
    function OrderComponent(orderService, router) {
        this.orderService = orderService;
        this.router = router;
        this.emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        this.numberPattern = /^[0-9]*$/;
        this.delivery = 8;
        this.paymentOptions = [
            { label: 'Dinheiro', value: 'MON' },
            { label: 'Cartão de Débito', value: 'DEB' },
            { label: 'Cartão Refeição', value: 'REF' },
        ];
    }
    OrderComponent_1 = OrderComponent;
    OrderComponent.prototype.ngOnInit = function () {
        this.orderForm = new FormGroup({
            name: new FormControl('', { validators: [Validators.required, Validators.minLength(5)] }),
            email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
            emailConfirmation: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
            address: new FormControl('', [Validators.required, Validators.minLength(5)]),
            number: new FormControl('', [Validators.required, Validators.pattern(this.numberPattern)]),
            optionalAddress: new FormControl(''),
            paymentOption: new FormControl('', [Validators.required]),
        }, { validators: OrderComponent_1.equalsTo, updateOn: 'blur' });
    };
    OrderComponent.equalsTo = function (group) {
        var email = group.get('email');
        var emailConfirmation = group.get('emailConfirmation');
        if (!email || !emailConfirmation) {
            return undefined;
        }
        if (email.value !== emailConfirmation.value) {
            return { emailsNotMatch: true };
        }
        return undefined;
    };
    OrderComponent.prototype.cartItems = function () {
        return this.orderService.cartItems();
    };
    OrderComponent.prototype.itemsValue = function () {
        return this.orderService.itemsValue();
    };
    OrderComponent.prototype.increaseQuantity = function (item) {
        this.orderService.increaseQuantity(item);
    };
    OrderComponent.prototype.decreaseQuantity = function (item) {
        this.orderService.decreaseQuantity(item);
    };
    OrderComponent.prototype.remove = function (item) {
        this.orderService.remove(item);
    };
    OrderComponent.prototype.checkOrder = function (order) {
        var _this = this;
        order.orderItems = this.cartItems()
            .map(function (item) { return new OrderItem(item.quantity, item.menuItem.id); });
        this.orderService
            .checkOrder(order)
            .pipe(tap(function (orderId) { return _this.orderId = orderId; }))
            .subscribe(function (orderId) {
            _this.orderService.clear();
            _this.router.navigate(['/order-summary']);
        });
    };
    OrderComponent.prototype.isOrderCompleted = function () {
        return this.orderId !== undefined;
    };
    OrderComponent = OrderComponent_1 = __decorate([
        Component({
            selector: 'mt-order',
            templateUrl: './order.component.html',
        }),
        __metadata("design:paramtypes", [OrderService, typeof (_a = typeof Router !== "undefined" && Router) === "function" && _a || Object])
    ], OrderComponent);
    return OrderComponent;
    var OrderComponent_1, _a;
}());
export { OrderComponent };
//# sourceMappingURL=order.component.js.map