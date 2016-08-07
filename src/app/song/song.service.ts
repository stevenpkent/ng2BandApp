import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { Song } from './song.model';

@Injectable()
export class SongService {
  baseUrl: string = 'http://testspkapi.azurewebsites.net/api/song/';
  headers: Headers = new Headers({ 'Content-Type': 'application/json' });
  options: RequestOptions = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) {}

  getSongs(albumId: number): Observable<Song[]> {
    let urlSuffix = 'getSongs/';
    return this.http.get(`${this.baseUrl}${urlSuffix}${albumId}`)
      .map((response: Response) => <Song[]>response.json())
      .catch(this.handleError);
  }

  postSong(song: Song): Observable<string> {
    return this.http.post(this.baseUrl, song, this.options)
      .map((response: Response) => 'OK')
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
