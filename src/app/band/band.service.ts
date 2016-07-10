import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {band} from './band.model';

@Injectable() export class BandService {
  baseUrl: string = 'http://testspkapi.azurewebsites.net/api/artists/';

  constructor(private http: Http) {}

  getBands_RxObservable(): Observable<band[]> {
    return this.http.get(this.baseUrl) //returns an Observable of HTTP Responses (Observable<Response>) from the RxJS library
    .map((response: Response) => <band[]>response.json())  //map is one of the RxJS operators
    .catch(this.handleError);
  }

  getBands_Promise(): Promise<band[]> { //Ward Bell recommends this. use observable but convert it to promise using toPromise()
    return this.http.get(this.baseUrl)
    .map((response: Response) => <band[]>response.json())
    .toPromise()
    .catch((error: any) => {
      return Promise.reject(error);
    });
  }

  getBand(id: number): Observable<band> {
    return this.http.get(`${this.baseUrl}${id}`)
    .map((response: Response) => <band>response.json())
    .catch(this.handleError);
  }

  putBand(band: band): Observable<string> { //Observable<band> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let url = `${this.baseUrl}${band.id}`;

    return this.http.put(url, band, options)
    .map((response: Response) => 'Band updated')
    .catch(this.handleError);
  }

  postBand(band: band): Observable<band> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.baseUrl, band, options)
    .map((response: Response) => <band>response.json())
    .catch(this.handleError);
  }

  deleteBand(bandId: number): Observable<string> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let url = `${this.baseUrl}${bandId}`;

    return this.http.delete(url, options)
    .map((response: Response) => 'OK')
    .catch(this.handleError);
  }

  private handleError(error: any) {
    let errorMessage = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }
}
