import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {LoginService} from './login/login.service';
import {Injectable} from '@angular/core';

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate {

  constructor(private loginService: LoginService) {
  }

  private checkAuthentication(path: string): boolean {
    const isLoggedIn = this.loginService.isLoggedIn();

    if (!isLoggedIn) {
      this.loginService.handleLogin(`/${path}`);
    }

    return isLoggedIn;
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    console.log('canLoad');
    return this.checkAuthentication(route.path);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('canActivate');
    return this.checkAuthentication(route.routeConfig.path);
  }

}
