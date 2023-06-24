import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../../component/home/home.component";
import {AboutComponent} from "../../component/about/about.component";
import {BookComponent} from "../../component/book/book.component";
import {RegisterPanelComponent} from "../../component/register-panel/register-panel.component";
import {LoginPanelComponent} from "../../component/login-panel/login-panel.component";


const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'book', component: BookComponent},
    {path: 'auth', component: LoginPanelComponent},
    {path: 'register', component: RegisterPanelComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }