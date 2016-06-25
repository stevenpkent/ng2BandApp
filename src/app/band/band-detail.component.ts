import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BandService} from './band.service';
import {band} from './band.model';
import { album } from './album.model';
import { SongService } from './song.service';
import { song } from './song.model';

@Component({
    moduleId: module.id,
    providers: [SongService],
    selector: 'band-detail',
    templateUrl: 'band-detail.component.html'
})
export class BandDetailComponent implements OnInit {
    band: band;
    songs: song[];
    private subscription: any; //keep a reference to the routeParam subscription so we can clean up in ngOnDestroy

    constructor(private route: ActivatedRoute,
                private bandService: BandService,
                private songService: SongService) { }

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

    getSongs(albumId: number): void {
        this.songService.getSongs(albumId)
        .subscribe(
          (response: song[]): void => {
            this.songs = response;
          },
          (error: any): void => {
          }
        );
    }
}
