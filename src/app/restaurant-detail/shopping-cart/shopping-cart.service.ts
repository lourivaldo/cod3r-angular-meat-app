import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {MenuItem} from '../menu-item/menu-item.model';
import {CartItem} from './cart-item.model';

@Injectable()
export class ShoppingCartService {

  items: CartItem[] = [];

  constructor() {}

  clear() {
    this.items = [];
  }

  addItem(item: MenuItem) {
    let foundItem = this.items.find((cItem) => cItem.menuItem.id === item.id)
    if (foundItem) {
      foundItem.quantity++;
    } else {
      this.items.push(new CartItem(item));
    }
  }

  increaseQuantity(item: CartItem) {
    item.quantity++;
  }

  decreaseQuantity(item: CartItem) {
    item.quantity--;

    if (item.quantity <= 0) {
      this.removeItem(item)
    }
  }

  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1)
  }

  total(): number {
    return this.items
      .map(item => item.value())
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  }
}
