var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, Injector } from '@angular/core';
import { LoginService } from './login/login.service';
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(injector) {
        this.injector = injector;
    }
    AuthInterceptor.prototype.intercept = function (request, next) {
        this.loginService = this.injector.get(LoginService);
        if (this.loginService.isLoggedIn()) {
            request = request.clone({ setHeaders: { 'Authorization': "Bearer " + this.loginService.user.accessToken } });
        }
        return next.handle(request);
    };
    AuthInterceptor = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof Injector !== "undefined" && Injector) === "function" && _a || Object])
    ], AuthInterceptor);
    return AuthInterceptor;
    var _a;
}());
export { AuthInterceptor };
//# sourceMappingURL=auth.interceptor.js.map