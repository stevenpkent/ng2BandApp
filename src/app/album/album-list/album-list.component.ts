import { Component, OnInit, ViewChild, Input } from '@angular/core';

import {SongListComponent} from '../../song/song-list/song-list.component';
import {album} from '../../album/album.model';

@Component({
  directives: [SongListComponent],
  moduleId: module.id,
  selector: 'album-list',
  templateUrl: 'album-list.component.html',
  styleUrls: ['album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  @Input() albums: album[];
  @ViewChild(SongListComponent) viewChild: SongListComponent; //allows parent access into a child

  constructor() {}

  ngOnInit() {
  }

   emitFromChild(songName: string) {
        alert('you chose ' + songName);
        this.viewChild.calledFromParent(songName); //parent calling a function that exists on the child
    }

}
