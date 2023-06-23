import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import {AppRoutingModule} from "./general/routes/app-routing.module";
import { BookComponent } from './book/book.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterPanelComponent } from './register-panel/register-panel.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AccommodationObjectService} from "./service/accommodation-object/accommodation-object.service";
import {HttpClientModule} from "@angular/common/http";
import {TestComponent} from "./component/test/test.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    BookComponent,
    AuthComponent,
    RegisterPanelComponent,
    HomeComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AccommodationObjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
