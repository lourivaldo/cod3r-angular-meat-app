import {CanLoad, Route} from '@angular/router';
import {Observable} from 'rxjs';
import {LoginService} from './login/login.service';
import {Injectable} from '@angular/core';

@Injectable()
export class LoggedInGuard implements CanLoad {

  constructor(private loginService: LoginService) {
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {

    const isLoggedIn = this.loginService.isLoggedIn();

    if (!isLoggedIn) {
      this.loginService.handleLogin(`/${route.path}`);
    }

    return isLoggedIn;
  }

}
