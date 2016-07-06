import {Component, OnInit} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http'; //import http capability at app.component level
import './rxjs-operators'; 
import {ROUTER_DIRECTIVES, Router} from '@angular/router'; 

import {BandService} from './band/band.service'; //available to all children if done here
import {APP_ROUTER_PROVIDERS} from './app.routes';

@Component({
  directives: [ROUTER_DIRECTIVES], 
  moduleId: module.id,
  providers: [HTTP_PROVIDERS,
              APP_ROUTER_PROVIDERS,
              BandService],
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'Band App';

  constructor(private router: Router) { }

  ngOnInit() {  
    this.router.navigate(['/bands']); 
  }
}
