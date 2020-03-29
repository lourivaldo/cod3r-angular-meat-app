import {HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

export class ErrorHandler {

  static handlerError(error: HttpErrorResponse|any) {
    let errorMessage: string;

    if (error instanceof HttpErrorResponse) {
      errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText} - BODY ${error.error}`
    } else {
      errorMessage = error.toString()
    }

    console.log(errorMessage);

    return Observable.throw(errorMessage);
  }
}
