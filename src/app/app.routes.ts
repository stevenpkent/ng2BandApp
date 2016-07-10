import {provideRouter, RouterConfig} from '@angular/router';
import {BandListComponent} from './band/band-list.component';
import {BandDetailComponent} from './band/band-detail.component';

const routes: RouterConfig = [
  { path: 'bands', component: BandListComponent },
  { path: 'band', component: BandDetailComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
