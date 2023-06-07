import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';




import {HttpClientModule} from "@angular/common/http";
import {UserdetailsPage} from "./userdetails.page";
import {UserdetailsRoutingModule} from "./userdetails-routing.module";
import {AvatarModule} from "ngx-avatars";
import {coreModule} from "../core/core.module";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule ,
        FormsModule,
        IonicModule,
        UserdetailsRoutingModule,
        HttpClientModule,
        AvatarModule,
        coreModule
    ],
    declarations: [UserdetailsPage]
})
export class UserdetailsModule {
}
