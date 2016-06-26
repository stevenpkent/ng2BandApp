import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { song } from './song.model';

@Injectable()
export class SongService {
  baseUrl: string = 'http://testspkapi.azurewebsites.net/api/song/'; 

  constructor(private http: Http) {}

  getSongs(albumId: number): Observable<song[]> {
    var urlSuffix: string = 'getSongs/';
    return this.http.get(`${this.baseUrl}${urlSuffix}${albumId}`)
      .map((response: Response) => <song[]>response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
