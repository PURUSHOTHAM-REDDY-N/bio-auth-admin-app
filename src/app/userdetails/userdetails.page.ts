import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ServerService} from '../service/server.service';
import {ToastController, NavController, Platform, LoadingController} from '@ionic/angular';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'user-details',
    templateUrl: './userdetails.page.html',
    styleUrls: ['./userdetails.page.scss'],
})

export class UserdetailsPage implements OnInit {

    username: string | null;

    usersDetails: any[];


    constructor(private route: ActivatedRoute,private toastController: ToastController,private formBuilder: FormBuilder,private router: Router, private http: HttpClient) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.username = params.get('username');
        })
        const userdetails ={
            username:this.username
        }
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem("token")}`, // Replace with your actual token
            }),
        };

        this.http.post('https://basic-auth-app.vercel.app/api/admin/get-transaction', userdetails,httpOptions).subscribe(
            (response: any) => {
                this.usersDetails=response;
            },
            (error) => {
                if(error.status===201){


                }
            }
        );
    }


    async presentToast(position: 'top' | 'middle' | 'bottom') {
        const toast = await this.toastController.create({
            message: 'User Created',
            duration: 1500,
            position: position,
        });

        await toast.present();
    }
}
