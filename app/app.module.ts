import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppComponent} from "./app.component";
import {FidsListComponent} from "./fids-list/fids-list.component";
import {FidsEntryComponent} from "./fids-list/fids-entry/fids-entry.component";

@NgModule({
    imports: [BrowserModule],
    bootstrap : [AppComponent],
    declarations: [AppComponent,FidsListComponent,FidsEntryComponent]
})
export class AppModule{}