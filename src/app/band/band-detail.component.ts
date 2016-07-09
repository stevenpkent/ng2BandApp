import {Component, OnInit, OnDestroy} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

import {BandService} from './band.service';
import {band} from './band.model';
import { AlbumListComponent } from '../album/album-list/album-list.component';

@Component({
    directives: [AlbumListComponent],
    moduleId: module.id,
    selector: 'band-detail',
    styleUrls: ['band-detail.css'],
    templateUrl: 'band-detail.component.html'
})
export class BandDetailComponent implements OnInit {
    band: band;
    selectedAlbumId: number;
    private subscription: any; //keep a reference to the routeParam subscription so we can clean up in ngOnDestroy
    
    putBandResponse: string;

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

   

    onSubmit() {
      this.putBandResponse = '';

      this.bandService.putBand(this.band)
      .subscribe(
        response => this.putBandResponse = response,
        error => this.putBandResponse = error
      );

      setTimeout(() => {
      this.putBandResponse = '';
    }, 5000);
    }
}
