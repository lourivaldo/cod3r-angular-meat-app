var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { RestaurantsService } from '../restaurants/restaurants.service';
import { OrderService } from '../order/order.service';
import { LoginService } from '../secutiry/login/login.service';
import { NotificationService } from './messages/notification.service';
import { LoggedInGuard } from '../secutiry/loggedin.guard';
import { LeaveOrderGuard } from '../order/leave-order.guard';
var SharedModule = SharedModule_1 = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [
                ShoppingCartService,
                RestaurantsService,
                OrderService,
                LoginService,
                NotificationService,
                LoggedInGuard,
                LeaveOrderGuard,
            ]
        };
    };
    return SharedModule;
}());
SharedModule = SharedModule_1 = __decorate([
    NgModule({
        declarations: [
            InputComponent,
            RadioComponent,
            RatingComponent,
        ],
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
        ],
        exports: [
            InputComponent,
            RadioComponent,
            RatingComponent,
            // Exportar aqui evita a importacao no modulo que ira usar
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
        ]
    })
], SharedModule);
export { SharedModule };
var SharedModule_1;
//# sourceMappingURL=shared.module.js.map