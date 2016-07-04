"use strict";
var router_1 = require('@angular/router');
var band_list_component_1 = require('./band/band-list.component');
var band_detail_component_1 = require('./band/band-detail.component');
exports.routes = [
    { path: 'bands', component: band_list_component_1.BandListComponent },
    { path: 'band/:id', component: band_detail_component_1.BandDetailComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
