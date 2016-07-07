import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
//import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
//import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
//import {MD_GRID_LIST_DIRECTIVES} from '@angular2-material/grid-list';

import {BandService} from './band.service';
import {band} from './band.model';

@Component({
    directives: [
                    //MD_BUTTON_DIRECTIVES, 
                    //MD_CARD_DIRECTIVES, 
                    //MD_GRID_LIST_DIRECTIVES
                    ],
    moduleId: module.id,
    selector: 'band-list',
    templateUrl: 'band-list.component.html'
})
export class BandListComponent implements OnInit {
    bandsRxObservable: Observable<band[]>;
    bandsPromise: band[];
    errorMessage: any;

    constructor(private bandService: BandService,
                private router: Router) { }

    ngOnInit(): void {
        /* RxObservable */
        //in this style you convert the Observable<band[]> from the service here
        /*
        this.bandService.getBandsRxObservable()
        .subscribe(
            (response: band[]): void => {
                this.bandsRxObservable = response;
                
            },
            (error: any): void => {
                
                this.errorMessage = <any>error;
            }
        );*/

        //in this style you do not convert Observable. add | async pipe in html. it handles the rest
        /*this.bandsRxObservable = this.bandService.getBands_RxObservable()
        .catch((err) => {
            console.log(err);
            return this.bands; 
        });*/  

        /* Promise */
        this.bandService.getBands_Promise() //Ward Bell recommends this
        .then((response: band[]): void => {
            this.bandsPromise = response;        
        })
        .catch((error: any): void => {
            console.log(error);
        })
        //.finally(() => {

        //})
        ;
    }

    onSelect(band: band): void {
        this.router.navigate(['/band', band.id]);
    }

}
