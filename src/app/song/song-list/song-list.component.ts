import {Component, Input, Output, EventEmitter, OnChanges, SimpleChange} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {Song} from '../song.model';
import {SongService} from '../song.service';

@Component({
  directives: [MD_CARD_DIRECTIVES],
  moduleId: module.id,
  providers: [SongService],
  selector: 'song-list',
  templateUrl: 'song-list.component.html',
  styleUrls: ['song-list.component.css']
})
export class SongListComponent implements OnChanges {
  @Input() albumId: number;
  @Output() emitToParent = new EventEmitter<string>(); //emit data to parent component
  songs: Song[];
  showAddSong: boolean;
  newSong: Song;
  ui: any = {};

  constructor(private songService: SongService) {}

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    this.getSongs(changes['albumId'].currentValue);
  }

  getSongs(albumId: number): void {
      this.songService.getSongs(albumId)
      .subscribe(
        (response: Song[]): void => {
          this.songs = response;
        },
        (error: any): void => {
        }
      );
  }

  selectSong(song: Song): void {
    this.emitToParent.emit(song.name); //emit data to parent component
  }

  calledFromParent(songName: string) {
      alert('this is your parent calling ' + songName);
    }

  addSongProcess(): void {
    this.showAddSong = !this.showAddSong;
    if (this.showAddSong) {
      this.newSong = new Song();
    }
    else {
      this.newSong = null;
    }
  }

  addSong(): void {
    this.newSong.albumId = this.albumId;
    this.songService.postSong(this.newSong)
    .subscribe(
        (response: string): void => {
          this.getSongs(this.albumId);
          this.addSongProcess();
        },
        (error: any): void => {
          this.ui.error = error;
        }
      );
  }
}
