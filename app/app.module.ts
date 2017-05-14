import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppComponent} from "./app.component";
import {FidsListComponent} from "./fids-list/fids-list.component";

@NgModule({
    imports: [BrowserModule],
    bootstrap : [AppComponent],
    declarations: [AppComponent,FidsListComponent]
})
export class AppModule{}