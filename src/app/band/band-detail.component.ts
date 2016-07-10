import {Component, OnInit, OnDestroy} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

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
    serviceResponse: string;

    constructor(private route: ActivatedRoute, private bandService: BandService, private router: Router) { }

    ngOnInit(): void {
      this.subscription = this.route.params.subscribe(params => {
        let id = +params['id']; //params are always type string. convert to number using +

        if (id === 0) { //creating a new band
          this.band = new band();
          return;
        }

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
      this.serviceResponse = '';

      if (this.band.id) { //PUT
        this.bandService.putBand(this.band)
        .subscribe(
          response => {
            this.serviceResponse = response;
          },
          error => {
            this.serviceResponse = error;
          }
        );
      }
      else { //POST
        this.bandService.postBand(this.band)
        .subscribe(
          response => {
            this.band = response;
            this.serviceResponse = `new band id is ${this.band.id}`;
          },
          error => {
            this.serviceResponse = error;
          }
        );
      }

      setTimeout(() => {
        this.serviceResponse = '';
      }, 5000);
    }

    deleteBand(): void {
       this.bandService.deleteBand(this.band.id)
        .subscribe(
          response => {
            this.router.navigate(['/bands']);
          },
          error => {
            this.serviceResponse = error;
          }
        );
    }
}
