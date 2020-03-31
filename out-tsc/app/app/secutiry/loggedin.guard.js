var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LoginService } from './login/login.service';
import { Injectable } from '@angular/core';
var LoggedInGuard = (function () {
    function LoggedInGuard(loginService) {
        this.loginService = loginService;
    }
    LoggedInGuard.prototype.checkAuthentication = function (path) {
        var isLoggedIn = this.loginService.isLoggedIn();
        if (!isLoggedIn) {
            this.loginService.handleLogin("/" + path);
        }
        return isLoggedIn;
    };
    LoggedInGuard.prototype.canLoad = function (route) {
        console.log('canLoad');
        return this.checkAuthentication(route.path);
    };
    LoggedInGuard.prototype.canActivate = function (route, state) {
        console.log('canActivate');
        return this.checkAuthentication(route.routeConfig.path);
    };
    return LoggedInGuard;
}());
LoggedInGuard = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [LoginService])
], LoggedInGuard);
export { LoggedInGuard };
//# sourceMappingURL=loggedin.guard.js.map