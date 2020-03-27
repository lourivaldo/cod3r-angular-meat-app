import { Component, OnInit } from '@angular/core';
import {RadioOption} from '../shared/radio/radio-option.model';
import {OrderService} from './order.service';
import {CartItem} from '../restaurant-detail/shopping-cart/cart-item.model';
import {Order, OrderItem} from './order.model';
import {Router} from '@angular/router';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {

  delivery: number = 8;

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'},
  ];

  constructor(private orderService: OrderService,
              private router: Router) { }

  ngOnInit() {
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
      .subscribe((orderId: string) => {
        console.log(`orderId ${orderId}`);
        this.orderService.clear();
        this.router.navigate(['/order-summary']);
    });
  }

}
