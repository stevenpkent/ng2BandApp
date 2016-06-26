"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/Rx'); //observable - load all features
var router_1 = require('@angular/router');
var band_service_1 = require('./band/band.service');
var band_list_component_1 = require('./band/band-list.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Band App';
    }
    AppComponent = __decorate([
        core_1.Component({
            directives: [router_1.ROUTER_DIRECTIVES, band_list_component_1.BandListComponent],
            moduleId: module.id,
            providers: [http_1.HTTP_PROVIDERS, band_service_1.BandService],
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
