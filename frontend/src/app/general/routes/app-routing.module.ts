import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../../component/home/home.component";
import {AboutComponent} from "../../component/about/about.component";
import {BookComponent} from "../../component/book/book.component";
import {AuthComponent} from "../../component/auth/auth.component";
import {RegisterPanelComponent} from "../../component/register-panel/register-panel.component";
import {TestComponent} from "../../component/test/test.component";
import {
  AccommodationObjectDetailsComponent
} from "../../component/accommodation-object-details/accommodation-object-details.component";
import {BookNowComponent} from "../../component/book-now/book-now.component";


const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'book', component: BookComponent},
    {path: 'auth', component: AuthComponent},
    {path: 'register', component: RegisterPanelComponent},
    {path: 'test', component: TestComponent},
  { path: 'accommodation-object-details/:id', component: AccommodationObjectDetailsComponent },
    {path: 'register', component: RegisterPanelComponent},
  { path: 'book-now/:id', component: BookNowComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
