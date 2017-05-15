/**
 * Created by nick on 5/14/2017.
 */

import {Component} from "@angular/core";
import {FidsInfoService} from "./fids-info.service";
import {FlightRecord} from "../shared/model/FlightRecord";

@Component({
    moduleId: module.id,
    templateUrl: 'fids-list.html',
    selector: 'fids-list'
})

export class FidsListComponent {
    flightRecords: FlightRecord[];
    errorMessage: string;

    constructor(private fidsInfoService: FidsInfoService){

    }

    ngOnInit(): void {
        this.fidsInfoService.getAll()
            .subscribe(flightRecords => this.flightRecords = flightRecords,
                error => this.errorMessage = <any>error);
    }

}
