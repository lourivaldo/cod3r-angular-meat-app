import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable, Injector} from '@angular/core';
import {LoginService} from './login/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  loginService: LoginService;

  constructor(private injector: Injector) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.loginService = this.injector.get(LoginService);

    if (this.loginService.isLoggedIn()) {
      request = request.clone({setHeaders: {'Authorization': `Bearer ${this.loginService.user.accessToken}`}});
    }

    return next.handle(request);
  }

}
