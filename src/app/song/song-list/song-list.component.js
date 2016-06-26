"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var song_service_1 = require('../song.service');
var SongListComponent = (function () {
    function SongListComponent(songService) {
        this.songService = songService;
    }
    SongListComponent.prototype.ngOnChanges = function (changes) {
        this.getSongs(changes['albumId'].currentValue);
    };
    SongListComponent.prototype.getSongs = function (albumId) {
        var _this = this;
        this.songService.getSongs(albumId)
            .subscribe(function (response) {
            _this.songs = response;
        }, function (error) {
        });
    };
    __decorate([
        core_1.Input()
    ], SongListComponent.prototype, "albumId");
    SongListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            providers: [song_service_1.SongService],
            selector: 'song-list',
            templateUrl: 'song-list.component.html',
            styleUrls: ['song-list.component.css']
        })
    ], SongListComponent);
    return SongListComponent;
}());
exports.SongListComponent = SongListComponent;
