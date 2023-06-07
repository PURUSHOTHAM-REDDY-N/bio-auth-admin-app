import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';




import {HttpClientModule} from "@angular/common/http";
import {GetuserPage} from "./getuser.page";
import {GetuserRoutingModule} from "./getuser-routing.module";
import {AvatarModule} from "ngx-avatars";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        IonicModule,
        GetuserRoutingModule,
        HttpClientModule,
        AvatarModule,
    ],
    declarations: [GetuserPage]
})
export class GetuserModule {
}
