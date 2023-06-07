import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';




import {HttpClientModule} from "@angular/common/http";
import {AdduserPage} from "./adduser.page";
import {AdduserRoutingModule} from "./adduser-routing.module";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule ,
        FormsModule,
        IonicModule,
        AdduserRoutingModule,
        HttpClientModule
    ],
    declarations: [AdduserPage]
})
export class AdduserModule {
}
