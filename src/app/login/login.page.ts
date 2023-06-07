import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ServerService} from '../service/server.service';
import {ToastController, NavController, Platform, LoadingController} from '@ionic/angular';
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

    username: string;
    password: string;

    constructor(private toastController: ToastController,public loadingController: LoadingController,private router: Router, private http: HttpClient) {
    }

    async login() {

        const loading = await this.loadingController.create({
            message: '',
            spinner:'bubbles'
        });
        await loading.present();

        const loginData = {
            username: this.username,
            password: this.password,
        };

        this.http.post('https://basic-auth-app.vercel.app/api/user/signIn', loginData).subscribe(
            (response: any) => {
                console.log(response)
                localStorage.setItem('token',response.token);
                loading.dismiss();

                this.presentToast('top')
                // You can store the token or user information received from the API for further use
                this.router.navigate(['home']);
            },
            (error) => {
                loading.dismiss();
                // this.router.navigate(['/home']);
                // Invalid login
                console.log('Invalid username or password');
            }
        );
    }

    async presentToast(position: 'top' | 'middle' | 'bottom') {
        const toast = await this.toastController.create({
            message: 'SignIn successfull',
            duration: 1500,
            position: position,
        });

        await toast.present();
    }

    ngOnInit() {
        if(localStorage.getItem('token')){
            this.router.navigate(['home'])
        }
    }

    ionViewWillEnter(){
        if(localStorage.getItem('token')){
            this.router.navigate(['home'])
        }
    }

}
