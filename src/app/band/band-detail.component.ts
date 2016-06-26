import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BandService} from './band.service';
import {band} from './band.model';
import { album } from '../album/album.model';
import { SongListComponent } from '../song/song-list/song-list.component';

@Component({
    directives: [SongListComponent],
    moduleId: module.id,
    selector: 'band-detail',
    templateUrl: 'band-detail.component.html'
})
export class BandDetailComponent implements OnInit {
    band: band;
    selectedAlbumId: number;
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
