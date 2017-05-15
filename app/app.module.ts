import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppComponent} from "./app.component";
import {FidsListComponent} from "./fids-list/fids-list.component";
import {FidsInfoService} from "./fids-list/fids-info.service";
import {HttpModule} from "@angular/http";

@NgModule({
    imports: [BrowserModule,HttpModule],
    bootstrap : [AppComponent],
    declarations: [AppComponent,FidsListComponent],
    providers: [FidsInfoService]
})
export class AppModule{}