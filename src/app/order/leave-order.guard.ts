import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {OrderComponent} from './order.component';
import {Injectable} from '@angular/core';

@Injectable()
export class LeaveOrderGuard implements CanDeactivate<OrderComponent> {

  canDeactivate(component: OrderComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot): boolean {

    if (!component.isOrderCompleted()) {
      return window.confirm('Deseja sair?')
    }

    return true;
  }

}
