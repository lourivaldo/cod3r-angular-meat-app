var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MEAT_API } from '../app.api';
var RestaurantsService = /** @class */ (function () {
    function RestaurantsService(http) {
        this.http = http;
    }
    RestaurantsService.prototype.restaurants = function (search) {
        var params = undefined;
        if (search) {
            params = new HttpParams().set('q', search);
        }
        return this.http.get(MEAT_API + "/restaurants", { params: params });
    };
    RestaurantsService.prototype.restaurantById = function (id) {
        return this.http.get(MEAT_API + "/restaurants/" + id);
    };
    RestaurantsService.prototype.reviewsOfRestaurant = function (id) {
        return this.http.get(MEAT_API + "/restaurants/" + id + "/reviews");
    };
    RestaurantsService.prototype.menuOfRestaurant = function (id) {
        return this.http.get(MEAT_API + "/restaurants/" + id + "/menu");
    };
    RestaurantsService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof HttpClient !== "undefined" && HttpClient) === "function" && _a || Object])
    ], RestaurantsService);
    return RestaurantsService;
    var _a;
}());
export { RestaurantsService };
//# sourceMappingURL=restaurants.service.js.map