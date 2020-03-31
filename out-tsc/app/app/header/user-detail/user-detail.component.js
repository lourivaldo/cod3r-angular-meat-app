var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { LoginService } from '../../secutiry/login/login.service';
var UserDetailComponent = (function () {
    function UserDetailComponent(loginService) {
        this.loginService = loginService;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
    };
    UserDetailComponent.prototype.user = function () {
        return this.loginService.user;
    };
    UserDetailComponent.prototype.isLoggedIn = function () {
        return this.loginService.isLoggedIn();
    };
    UserDetailComponent.prototype.login = function () {
        this.loginService.handleLogin();
    };
    UserDetailComponent.prototype.logout = function () {
        this.loginService.logout();
    };
    return UserDetailComponent;
}());
UserDetailComponent = __decorate([
    Component({
        selector: 'mt-user-detail',
        templateUrl: './user-detail.component.html',
    }),
    __metadata("design:paramtypes", [LoginService])
], UserDetailComponent);
export { UserDetailComponent };
//# sourceMappingURL=user-detail.component.js.map