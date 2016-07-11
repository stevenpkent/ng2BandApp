import { Component, OnInit, ViewChild, Input } from '@angular/core';

import {SongListComponent} from '../../song/song-list/song-list.component';
import {album} from '../../album/album.model';
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
  @Input() bandId: number;
  @ViewChild(SongListComponent) viewChild: SongListComponent; //allows parent access into a child
  albums: album[] = [];

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.albumService.getAlbumsByBandId(this.bandId) 
    .subscribe(
      (response: album[]): void => {
        this.albums = response;
      },
      (error: any): void => {
      }
    );
  }

   emitFromChild(songName: string) {
        alert('you chose ' + songName);
        this.viewChild.calledFromParent(songName); //parent calling a function that exists on the child
    }

}
