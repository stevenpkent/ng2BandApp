/**
 * Created by steven on 6/20/16.
 */

import {Component, OnInit, OnDestroy} from '@angular/core';
import {BandService} from './band.service';
import {band} from './band.model';
import {ActivatedRoute} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'band-detail',
    templateUrl: 'band-detail.component.html'
})
export class BandDetailComponent implements OnInit {
    band: band;
    private subscription: any; //keep a reference to the routeParam subscription so we can clean up in ngOnDestroy

    constructor(private route: ActivatedRoute,
                private bandService: BandService) { }

    ngOnInit(): void {
      this.subscription = this.route.params.subscribe(params => {
        let id = +params['id']; //params are always type string

        this.bandService.getBand(id)
          .subscribe(
            (response: band): void => {
              this.band = response;
            },
            (error: any): void => {
            }
          );
      });
    }

    ngOnDestory(): void {
      this.subscription.unsubscribe(); //unsubscribe before angular destroys the component
    }
}
