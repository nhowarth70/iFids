import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {FlightRecord} from "../shared/model/FlightRecord";

@Injectable()
export class FidsInfoService {
    readonly url : string = "https://flightnodeservice-azoideftms.now.sh/flights"
    constructor(private http : Http){
    }

    getAll(): Observable<FlightRecord[]>{
        return this.http.get(this.url)
            .map((response: Response) => <FlightRecord[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
              console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}