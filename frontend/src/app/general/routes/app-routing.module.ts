import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HeaderComponent} from "../../header/header.component";
import {AboutComponent} from "../../about/about.component";
import {BookComponent} from "../../book/book.component";
import {AuthComponent} from "../../auth/auth.component";
import {RegisterPanelComponent} from "../../register-panel/register-panel.component";
import {HomeComponent} from "../../home/home.component";

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'book', component: BookComponent},
    {path: 'auth', component: AuthComponent},
    {path: 'register', component: RegisterPanelComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }