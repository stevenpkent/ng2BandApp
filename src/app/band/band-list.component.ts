import {Component, OnInit} from '@angular/core';
import {BandService} from './band.service';
import {band} from './band.model';

@Component({
    moduleId: module.id,
    selector: 'band-list',
    templateUrl: 'band-list.component.html'
})
export class BandListComponent implements OnInit {
    bands: band[];
    errorMessage: any;

    constructor(private _bandService: BandService) { }

    ngOnInit(): void { 
        this._bandService.getBands()
            .subscribe(
                response => this.bands = response,
                error => this.errorMessage = <any>error
            );
    }

}