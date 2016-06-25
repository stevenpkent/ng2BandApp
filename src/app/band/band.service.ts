import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {band} from './band.model';

@Injectable()
export class BandService {
  baseUrl: string = 'http://testspkapi.azurewebsites.net/api/artists/'; 

  constructor(private http: Http) {}

  getBands(): Observable<band[]> {
    return this.http.get(this.baseUrl)
      .map((response: Response) => <band[]>response.json())
      //for debugging .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getBand(id: number): Observable<band> {
    return this.http.get(`${this.baseUrl}${id}`)
      .map((response: Response) => <band>response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
