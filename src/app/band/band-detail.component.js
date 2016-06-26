"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var song_list_component_1 = require('../song/song-list/song-list.component');
var BandDetailComponent = (function () {
    function BandDetailComponent(route, bandService) {
        this.route = route;
        this.bandService = bandService;
    }
    BandDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            var id = +params['id']; //params are always type string
            _this.bandService.getBand(id)
                .subscribe(function (response) {
                _this.band = response;
            }, function (error) {
            });
        });
    };
    BandDetailComponent.prototype.ngOnDestory = function () {
        this.subscription.unsubscribe(); //unsubscribe before angular destroys the component
    };
    BandDetailComponent = __decorate([
        core_1.Component({
            directives: [song_list_component_1.SongListComponent],
            moduleId: module.id,
            selector: 'band-detail',
            templateUrl: 'band-detail.component.html'
        })
    ], BandDetailComponent);
    return BandDetailComponent;
}());
exports.BandDetailComponent = BandDetailComponent;
