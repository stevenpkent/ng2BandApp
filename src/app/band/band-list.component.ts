import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
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
    errorMessage: any;
    loading: boolean = false;

    constructor(private bandService: BandService,
                private router: Router) { }

    ngOnInit(): void {
        this.loading = true;
        this.bandService.getBands()
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

    onSelect(band: band): void {
        this.router.navigate(['/band', band.id]);
    }

}
