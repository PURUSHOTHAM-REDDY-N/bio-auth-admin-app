import {Component, Injector} from '@angular/core';
import {Platform} from "@ionic/angular";
import {BiometryType, NativeBiometric} from "@capgo/capacitor-native-biometric";
import {App} from "@capacitor/app";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {

    authentication: boolean = false

    checkBio: boolean = false


    constructor(injector: Injector, private platform: Platform,) {
        this.initializeApp();

    }

    initializeApp() {

        this.platform.ready().then(() => {
            console.log("platform ready here")
            if (!this.checkBio) {
                this.checkBio = true


                if(localStorage.getItem('token')){

                this.performBiometricVerificatin()
                }



            }
            this.setupListener();

        });
    }

    async performBiometricVerificatin() {

        const result = await NativeBiometric.isAvailable({useFallback: true});

        if (!result.isAvailable) {
            console.log("inside ! result")
        }
        ;

        if (result.isAvailable) {
            console.log(result.biometryType)
        }


        const isFaceID = result.biometryType == BiometryType.FACE_ID;

       await NativeBiometric.verifyIdentity({
            reason: "User Attendance",
            title: "Log in",
            subtitle: "Maybe add subtitle here?",
            description: "Maybe a description too?",
            useFallback: true,
            maxAttempts: 4
        })
            .then(() => console.log("successfull"))
            .catch(() => App.exitApp());


        const credentials = await NativeBiometric.getCredentials({
            server: "www.example.com",
        });
    };


    async setupListener() {
        App.addListener('appStateChange', ({isActive}) => {
            if (!isActive) {
                this.checkBio = false
                console.log('app background')
                // App went to background
                // Save anything you fear might be lost
            } else {
                if (!this.checkBio) {
                    this.checkBio = true;
                    this.performBiometricVerificatin()
                    console.log('app foreground')
                }
                // App went to foreground
                // restart things like sound playing
            }
        });
    }


}
