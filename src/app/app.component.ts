import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/Rx'; //observable - load all features
import {ROUTER_DIRECTIVES} from '@angular/router';
import {BandService} from './band/band.service';
import {BandListComponent} from './band/band-list.component';

@Component({
  directives: [ROUTER_DIRECTIVES, BandListComponent],
  moduleId: module.id,
  providers: [HTTP_PROVIDERS, BandService],
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title: string = 'Band App';
}
