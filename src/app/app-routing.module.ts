import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AdduserModule} from "./adduser/adduser.module";
import {GetuserModule} from "./getusers/getuser.module";
import {UserdetailsModule} from "./userdetails/userdetails.module";

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
    },

    {
        path: "adduser",
        loadChildren: () => import('./adduser/adduser.module').then(m => m.AdduserModule)
    },
    {
        path: "getuser",
        loadChildren: () => import('./getusers/getuser.module').then(m => m.GetuserModule)
    },
    {
        path: "userdetails",
        loadChildren: () => import('./userdetails/userdetails.module').then((m => m.UserdetailsModule))
    }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
