import {Component, Input, OnChanges, SimpleChange} from '@angular/core';
import {song} from '../song.model';
import {SongService} from '../song.service';

@Component({
  moduleId: module.id,
  providers: [SongService],
  selector: 'song-list',
  templateUrl: 'song-list.component.html',
  styleUrls: ['song-list.component.css']
})
export class SongListComponent implements OnChanges {
  @Input() albumId: number;
  songs: song[];

  constructor(private songService: SongService) {}

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    this.getSongs(changes['albumId'].currentValue);
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
