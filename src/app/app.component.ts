import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http'; //import http capability at app.component level
import './rxjs-operators'; 
import {ROUTER_DIRECTIVES} from '@angular/router'; 

import {BandService} from './band/band.service';
import {BandListComponent} from './band/band-list.component';
import {APP_ROUTER_PROVIDERS} from './app.routes';

@Component({
  directives: [ROUTER_DIRECTIVES,
                BandListComponent], 
  moduleId: module.id,
  providers: [HTTP_PROVIDERS,
              APP_ROUTER_PROVIDERS,
              BandService],
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title: string = 'Band App';
}
