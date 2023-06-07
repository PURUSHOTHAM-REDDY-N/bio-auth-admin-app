import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ServerService} from '../service/server.service';
import {ToastController, NavController, Platform, LoadingController} from '@ionic/angular';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'add-user',
    templateUrl: './adduser.page.html',
    styleUrls: ['./adduser.page.scss'],
})

export class AdduserPage implements OnInit {

    userForm: FormGroup;

    constructor(private toastController: ToastController,private formBuilder: FormBuilder,private router: Router, private http: HttpClient) { }

    ngOnInit(): void {
        this.userForm = this.formBuilder.group({
            name: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    submitForm(): void {
        if (this.userForm.valid) {
            // Here you can perform the logic to add the user
            const newUser = this.userForm.value;

            const httpOptions = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem("token")}`, // Replace with your actual token
                }),
            };

            this.http.post('https://basic-auth-app.vercel.app/api/admin/create-user', newUser,httpOptions).subscribe(
                (response: any) => {
                },
                (error) => {
                    if(error.status===201){
                        this.presentToast('top')
                        this.userForm = this.formBuilder.group({
                            name: ['', Validators.required],
                            username: ['', Validators.required],
                            password: ['', Validators.required]
                        });

                    }
                }
            );
            // Add your API call or any other logic here
        } else {
            // Handle form validation errors
            console.log('Invalid form');
        }
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
