/**
 * Created by nick on 5/14/2017.
 */

import {Component} from "@angular/core";

@Component({
    templateUrl: 'app/fids/fids.html',
    selector: 'fids-display'
})

export class FidsDisplayComponent {
    flights = [{"flightNumber": "999", "city": "London", "airlineCode": "EZY", "scheduled": "14:00", "gate": "D4","airline":"EasyJet","statusText":"Departed"},
        {"flightNumber": "122", "city": "New York", "airlineCode": "BA", "scheduled": "15:00", "gate": "A1","airline":"British Airways","statusText":"On Time"}]
}
