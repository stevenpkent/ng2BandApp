import {Component, OnInit} from '@angular/core';

/*We prefer to register application-wide items in the the root AppComponent*/
import {HTTP_PROVIDERS} from '@angular/http'; // import http capability at app.component level
import './rxjs-operators'; //add the RxJS observable operators we need in this app
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import {BandService} from './band/band.service'; // available to all children if done here
import {APP_ROUTER_PROVIDERS} from './app.routes';
/*We prefer to register application-wide items in the root AppComponent*/

@Component({
  directives: [ROUTER_DIRECTIVES],
  moduleId: module.id,
  providers: [HTTP_PROVIDERS,
              APP_ROUTER_PROVIDERS,
              BandService],
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  title: string = 'Band App';

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/bands']);
  }
}
