import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
var ErrorHandler = (function () {
    function ErrorHandler() {
    }
    ErrorHandler.handlerError = function (error) {
        var errorMessage;
        if (error instanceof HttpErrorResponse) {
            errorMessage = "Erro " + error.status + " ao acessar a URL " + error.url + " - " + error.statusText + " - BODY " + error.error;
        }
        else {
            errorMessage = error.toString();
        }
        console.log(errorMessage);
        return Observable.throw(errorMessage);
    };
    return ErrorHandler;
}());
export { ErrorHandler };
//# sourceMappingURL=app.error-handler.js.map