import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ServerService} from '../service/server.service';
import {ToastController, NavController, Platform, LoadingController} from '@ionic/angular';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
    selector: 'get-user',
    templateUrl: './getuser.page.html',
    styleUrls: ['./getuser.page.scss'],
})

export class GetuserPage implements OnInit {

    users: any[]; // Array to store the fetched user details

    constructor(public loadingController: LoadingController, private http: HttpClient, private router: Router) {
    }

    ngOnInit() {
        this.fetchUserDetails();
    }

    goToUserDetails(username: string) {
        this.router.navigate(['/userdetails/userdetails', username]);
    }


    async fetchUserDetails() {
        const loading = await this.loadingController.create({
            message: '',
            spinner: 'bubbles'
        });
        await loading.present();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem("token")}`, // Replace with your actual token
            }),
        };
        this.http.get('https://basic-auth-app.vercel.app/api/admin/get-users', httpOptions).subscribe(
            (response: any) => {
                this.users = response;
                loading.dismiss();

            },
            (error) => {
                console.log('Error fetching user details:', error);
            }
        );
    }


}
