var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MEAT_API } from '../app.api';
import { LoginService } from '../secutiry/login/login.service';
var OrderService = /** @class */ (function () {
    function OrderService(cartService, http, loginService) {
        this.cartService = cartService;
        this.http = http;
        this.loginService = loginService;
    }
    OrderService.prototype.cartItems = function () {
        return this.cartService.items;
    };
    OrderService.prototype.itemsValue = function () {
        return this.cartService.total();
    };
    OrderService.prototype.increaseQuantity = function (item) {
        this.cartService.increaseQuantity(item);
    };
    OrderService.prototype.decreaseQuantity = function (item) {
        this.cartService.decreaseQuantity(item);
    };
    OrderService.prototype.remove = function (item) {
        this.cartService.removeItem(item);
    };
    OrderService.prototype.clear = function () {
        console.log('FIM');
    };
    OrderService.prototype.checkOrder = function (order) {
        var headers = new HttpHeaders();
        if (this.loginService.isLoggedIn()) {
            headers = headers.append('Authorization', "Bearer " + this.loginService.user.accessToken);
        }
        return this.http.post(MEAT_API + "/orders", order, { headers: headers })
            .map(function (order) { return order.id; });
    };
    OrderService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [ShoppingCartService,
            HttpClient,
            LoginService])
    ], OrderService);
    return OrderService;
}());
export { OrderService };
//# sourceMappingURL=order.service.js.map