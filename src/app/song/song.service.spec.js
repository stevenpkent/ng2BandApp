/* tslint:disable:no-unused-variable */
"use strict";
var testing_1 = require('@angular/core/testing');
var song_service_1 = require('./song.service');
testing_1.describe('Song Service', function () {
    testing_1.beforeEachProviders(function () { return [song_service_1.SongService]; });
    testing_1.it('should ...', testing_1.inject([song_service_1.SongService], function (service) {
        testing_1.expect(service).toBeTruthy();
    }));
});
