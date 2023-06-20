import {Component} from '@angular/core';
import {Router} from "@angular/router";


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    authentication: boolean = false


    biometricType: string = "check availability first"

  logout() {
      localStorage.removeItem('token');
      this.router.navigate(['login']);
  }


    constructor(private router: Router) {
    }

    ngOnInit() {
        // this.printCurrentPosition()
    }


}
