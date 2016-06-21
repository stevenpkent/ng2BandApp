/**
 * Created by steven on 6/20/16.
 */

import { Component, OnInit } from '@angular/core';
import {BandService} from './band.service';
import {band} from './band.model';

@Component({
    moduleId: module.id,
    selector: 'band-detail',
    templateUrl: 'band-detail.component.html'
})
export class BandDetailComponent implements OnInit {
    band: band;
    constructor(private _bandService: BandService) { }

    ngOnInit() {
      this._bandService.getBand(5)
        .subscribe(
          (response: band): void => {
            this.band = response;

          },
          (error: any): void => {

          }
        );
    }

}
