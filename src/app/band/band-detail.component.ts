import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {NgForm} from '@angular/common';
import {ActivatedRoute} from "@angular/router";

import {BandService} from './band.service';
import {band} from './band.model';
import {album} from '../album/album.model';
import {SongListComponent} from '../song/song-list/song-list.component';
import {song} from '../song/song.model';

@Component({
    directives: [SongListComponent],
    moduleId: module.id,
    selector: 'band-detail',
    styleUrls: ['band-detail.css'],
    templateUrl: 'band-detail.component.html'
})
export class BandDetailComponent implements OnInit {
    band: band;
    selectedAlbumId: number;
    private subscription: any; //keep a reference to the routeParam subscription so we can clean up in ngOnDestroy
    @ViewChild(SongListComponent) viewChild: SongListComponent; //allows parent access into a child

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

    emitFromChild(songName: string) {
        alert('you chose ' + songName);
        this.viewChild.calledFromParent(songName); //parent calling a function that exists on the child
    }

    
}
