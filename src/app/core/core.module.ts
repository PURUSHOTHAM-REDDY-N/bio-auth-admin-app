import {DateFormatPipe} from "./core.pipe";
import {NgModule} from "@angular/core";
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [
        DateFormatPipe,
    ],
    imports: [
        CommonModule,
        IonicModule,
    ],
    exports: [
        DateFormatPipe
    ],
    providers: []
})

export class coreModule{

}

