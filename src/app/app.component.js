"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http'); //import http capability at app.component level
require('./rxjs-operators');
var router_1 = require('@angular/router');
var band_service_1 = require('./band/band.service'); //available to all children if done here
var app_routes_1 = require('./app.routes');
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'Band App';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/bands']);
    };
    AppComponent = __decorate([
        core_1.Component({
            directives: [router_1.ROUTER_DIRECTIVES],
            moduleId: module.id,
            providers: [http_1.HTTP_PROVIDERS,
                app_routes_1.APP_ROUTER_PROVIDERS,
                band_service_1.BandService],
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
