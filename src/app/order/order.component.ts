import { Component, OnInit } from '@angular/core';
import {RadioOption} from '../shared/radio/radio-option.model';
import {OrderService} from './order.service';
import {CartItem} from '../restaurant-detail/shopping-cart/cart-item.model';
import {Order, OrderItem} from './order.model';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  numberPattern = /^[0-9]*$/;

  orderId: string;

  orderForm: FormGroup;

  delivery: number = 8;

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'},
  ];

  constructor(private orderService: OrderService,
              private router: Router) { }

  ngOnInit() {
    this.orderForm = new FormGroup({
      name:              new FormControl('', {validators: [Validators.required, Validators.minLength(5)]}),
      email:             new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmation: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      address:           new FormControl('', [Validators.required, Validators.minLength(5)]),
      number:            new FormControl('', [Validators.required, Validators.pattern(this.numberPattern)]),
      optionalAddress:   new FormControl(''),
      paymentOption:     new FormControl('', [Validators.required]),
    }, {validators: OrderComponent.equalsTo, updateOn: 'blur'})
  }

  static equalsTo(group: AbstractControl): {[key: string]: boolean} {
    const email = group.get('email');
    const emailConfirmation = group.get('emailConfirmation');

    if (!email || !emailConfirmation) {
      return undefined;
    }

    if (email.value !== emailConfirmation.value) {
      return {emailsNotMatch: true};
    }

    return undefined;
  }

  cartItems() {
    return this.orderService.cartItems()
  }

  itemsValue() {
    return this.orderService.itemsValue()
  }

  increaseQuantity(item: CartItem) {
    this.orderService.increaseQuantity(item)
  }

  decreaseQuantity(item: CartItem) {
    this.orderService.decreaseQuantity(item)
  }

  remove(item: CartItem) {
    this.orderService.remove(item)
  }

  checkOrder(order: Order) {
    order.orderItems = this.cartItems()
      .map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id));

    this.orderService
      .checkOrder(order)
      .pipe(tap((orderId) => this.orderId = orderId))
      .subscribe((orderId: string) => {
        this.orderService.clear();
        this.router.navigate(['/order-summary']);
    });
  }

  isOrderCompleted(): boolean {
    return this.orderId !== undefined;
  }

}
