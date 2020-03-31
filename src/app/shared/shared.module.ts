import {ModuleWithProviders, NgModule} from '@angular/core';
import {InputComponent} from './input/input.component';
import {RadioComponent} from './radio/radio.component';
import {RatingComponent} from './rating/rating.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.service';
import {RestaurantsService} from '../restaurants/restaurants.service';
import {OrderService} from '../order/order.service';
import {LoginService} from '../secutiry/login/login.service';
import {NotificationService} from './messages/notification.service';
import {LoggedInGuard} from '../secutiry/loggedin.guard';
import {LeaveOrderGuard} from '../order/leave-order.guard';

@NgModule({
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
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
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
  }
}
