"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var card_1 = require('@angular2-material/card');
var button_1 = require('@angular2-material/button');
var grid_list_1 = require('@angular2-material/grid-list');
var BandListComponent = (function () {
    function BandListComponent(bandService, router) {
        this.bandService = bandService;
        this.router = router;
        this.loading = false;
    }
    BandListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.bandService.getBands()
            .subscribe(function (response) {
            _this.bands = response;
            _this.loading = false;
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    BandListComponent.prototype.onSelect = function (band) {
        this.router.navigate(['/band', band.id]);
    };
    BandListComponent = __decorate([
        core_1.Component({
            directives: [button_1.MD_BUTTON_DIRECTIVES, card_1.MD_CARD_DIRECTIVES, grid_list_1.MD_GRID_LIST_DIRECTIVES],
            moduleId: module.id,
            selector: 'band-list',
            templateUrl: 'band-list.component.html'
        })
    ], BandListComponent);
    return BandListComponent;
}());
exports.BandListComponent = BandListComponent;
