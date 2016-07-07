"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
var BandService = (function () {
    function BandService(http) {
        this.http = http;
        this.baseUrl = 'http://testspkapi.azurewebsites.net/api/artists/';
    }
    BandService.prototype.getBands_RxObservable = function () {
        return this.http.get(this.baseUrl)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BandService.prototype.getBands_Promise = function () {
        return this.http.get(this.baseUrl)
            .map(function (response) { return response.json(); })
            .toPromise()
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    BandService.prototype.getBand = function (id) {
        return this.http.get("" + this.baseUrl + id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BandService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    BandService = __decorate([
        core_1.Injectable()
    ], BandService);
    return BandService;
}());
exports.BandService = BandService;
