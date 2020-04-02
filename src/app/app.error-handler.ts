import {HttpErrorResponse} from '@angular/common/http';
import {ErrorHandler, Injectable, Injector, NgZone} from '@angular/core';
import {NotificationService} from './shared/messages/notification.service';
import {LoginService} from './secutiry/login/login.service';
// import {throwError} from 'rxjs/operators';

@Injectable()
export class AppErrorHandler extends ErrorHandler {

  constructor(private notificationService: NotificationService,
              private injector: Injector,
              private ngZone: NgZone) {
    super();
  }

  handleError(errorResponse: HttpErrorResponse|any) {

    if (errorResponse instanceof HttpErrorResponse) {
      const message = errorResponse.error.message;

      this.ngZone.run(() => {
        switch (errorResponse.status) {
          case 401:
            this.injector.get(LoginService).handleLogin();
            break;
          case 403:
            this.notificationService.notify(message || 'Não autorizado.');
            break;
          case 404:
            this.notificationService.notify(message || 'Recurso não encontrado');
            break;
        }
      });
    }

    super.handleError(errorResponse);
  }
}
