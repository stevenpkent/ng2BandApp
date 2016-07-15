import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {album} from './album.model';

@Injectable() export class AlbumService {
  baseUrl: string = 'http://testspkapi.azurewebsites.net/api/album/';
  headers: Headers = new Headers({ 'Content-Type': 'application/json' });
  options: RequestOptions = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getAlbumsByBandId(id: number): Observable<album[]> {
    let url = `${this.baseUrl}getAlbumsByBandId/${id}`;
    return this.http.get(url)
    .map((response: Response) => <album[]>response.json())
    .catch(this.handleError);
  }

  postAlbum(album: album): Observable<string> {
    return this.http.post(this.baseUrl, album, this.options)
    .map((response: Response) => 'OK')
    .catch(this.handleError);
  }

  private handleError(error: any) {
    let errorMessage = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }
}
