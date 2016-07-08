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

  putBand(band: band): void { //Observable<band> {
    let body = JSON.stringify(band);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let url = `${this.baseUrl}${band.id}`;

    //return 
    this.http.put(url, body, options)
                    //.map((response: Response) => 
                    //.catch(this.handleError)
                    .catch(this.handleError);

  }

  postBand(): void {
    let b = new band();
    b.name = 'fake';
    b.rating = 3;
    //let headers = new Headers({ 'Content-Type': 'application/json' });
    //let options = new RequestOptions({ headers: headers });
    this.http.post(this.baseUrl, b); //, options);

  }

  private handleError(error: any) {
    let errorMessage = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }
}
