import { Component, OnInit, ViewChild, Input } from '@angular/core';

import {SongListComponent} from '../../song/song-list/song-list.component';
import {album} from '../../album/album.model';
import {band} from '../../band/band.model';
import {AlbumService} from '../../album/album.service';

@Component({
  directives: [SongListComponent],
  moduleId: module.id,
  providers: [AlbumService],
  selector: 'album-list',
  templateUrl: 'album-list.component.html',
  styleUrls: ['album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  @Input() band: band;
  @ViewChild(SongListComponent) viewChild: SongListComponent; //allows parent access into a child
  albums: album[] = [];
  showAddAlbum: boolean;
  newAlbum: album;
  ui: any = {};

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.getAlbums();
  }

  getAlbums(): void {
    this.albumService.getAlbumsByBandId(this.band.id)
    .subscribe(
      (response: album[]): void => {
        this.albums = response;
      },
      (error: any): void => {
        this.ui.error = error;
      }
    );
  }

  emitFromChild(songName: string) {
      alert('you chose ' + songName);
      this.viewChild.calledFromParent(songName); //parent calling a function that exists on the child
  }

  addAlbumProcess(): void {
      this.showAddAlbum = !this.showAddAlbum;
      if (this.showAddAlbum) {
        this.newAlbum = new album();
      }
      else {
        this.newAlbum = null;
      }
  }

  postAlbum(): void {
    this.newAlbum.band = this.band;
    this.albumService.postAlbum(this.newAlbum)
    .subscribe(
        (response: string): void => {
          this.getAlbums();
          this.addAlbumProcess();
        },
        (error: any): void => {
          this.ui.error = error;
        }
      );
  }
}
