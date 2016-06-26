"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
var SongService = (function () {
    function SongService(http) {
        this.http = http;
        this.baseUrl = 'http://testspkapi.azurewebsites.net/api/song/';
    }
    SongService.prototype.getSongs = function (albumId) {
        var urlSuffix = 'getSongs/';
        return this.http.get("" + this.baseUrl + urlSuffix + albumId)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SongService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    SongService = __decorate([
        core_1.Injectable()
    ], SongService);
    return SongService;
}());
exports.SongService = SongService;
