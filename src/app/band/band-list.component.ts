import {Component, OnInit} from '@angular/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_GRID_LIST_DIRECTIVES} from '@angular2-material/grid-list';
import {BandService} from './band.service';
import {band} from './band.model';

@Component({
    directives: [MD_BUTTON_DIRECTIVES, MD_CARD_DIRECTIVES, MD_GRID_LIST_DIRECTIVES],
    moduleId: module.id,
    selector: 'band-list',
    templateUrl: 'band-list.component.html'
})
export class BandListComponent implements OnInit {
    bands: band[];
    selectedBand: band;
    errorMessage: any;
    loading: boolean = false;

    constructor(private _bandService: BandService) { }

    ngOnInit(): void {
        this.loading = true;
        this._bandService.getBands()
        .subscribe(
            (response: band[]): void => {
                this.bands = response;
                this.loading = false;
            },
            (error: any): void => {
                this.errorMessage = <any>error;
            }
        );
    }

    selected(band: band): void {
        this.selectedBand = band;
    }

}
