/**
 * Created by nick on 5/14/2017.
 */
import {Component,Input} from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: 'fids-entry.html',
    selector: 'fids-entry'
})

export class FidsEntryComponent {
    @Input("entry")
    flight : any
}
