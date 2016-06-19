import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx'; //observable - load all features
import {BandService} from './band/band.service';
import {BandListComponent} from './band/band-list.component';

@Component({
  directives: [BandListComponent],
  moduleId: module.id,
  providers: [HTTP_PROVIDERS, BandService],
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Band App';
}
