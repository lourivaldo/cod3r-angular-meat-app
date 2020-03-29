import {Injectable} from '@angular/core';
import {ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.service';
import {CartItem} from '../restaurant-detail/shopping-cart/cart-item.model';
import {Order} from './order.model';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { HttpClient} from '@angular/common/http';
import {MEAT_API} from '../app.api';

@Injectable()
export class OrderService {

  constructor(private cartService: ShoppingCartService,
              private http: HttpClient) { }

  cartItems(): CartItem[] {
    return this.cartService.items
  }

  itemsValue(): number {
    return this.cartService.total()
  }

  increaseQuantity(item: CartItem) {
    this.cartService.increaseQuantity(item)
  }

  decreaseQuantity(item: CartItem) {
    this.cartService.decreaseQuantity(item)
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item)
  }

  clear() {
    console.log('FIM')
  }

  checkOrder(order: Order): Observable<string> {
    return this.http.post<Order>(`${MEAT_API}/orders`, order)
      .map(order => order.id);
  }
}
