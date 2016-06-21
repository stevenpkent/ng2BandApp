/**
 * Created by steven on 6/20/16.
 */

import { provideRouter, RouterConfig } from '@angular/router';
import {BandListComponent} from './band/band-list.component';
import {BandDetailComponent} from './band/band-detail.component';

export const routes: RouterConfig = [
  { path: 'bands', component: BandListComponent },
  { path: 'band/:id', component: BandDetailComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
