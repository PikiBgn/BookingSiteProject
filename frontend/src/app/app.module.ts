import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { AboutComponent } from './component/about/about.component';
import {AppRoutingModule} from "./general/routes/app-routing.module";
import { BookComponent } from './component/book/book.component';
import { AuthComponent } from './component/auth/auth.component';
import { RegisterPanelComponent } from './component/register-panel/register-panel.component';
import { HomeComponent } from './component/home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AccommodationObjectService} from "./service/accommodation-object/accommodation-object.service";
import {HttpClientModule} from "@angular/common/http";
import {TestComponent} from "./component/test/test.component";
import {AccommodationObjectTypeService} from "./service/accommodation-object-type/accommodation-object-type.service";
import {LocalizationService} from "./service/localization/localization.service";
import {ReservationService} from "./service/reservation/reservation.service";
import {RoomService} from "./service/room/room.service";
import {UserService} from "./service/user/user.service";

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
  providers: [AccommodationObjectService, AccommodationObjectTypeService, LocalizationService, ReservationService, RoomService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
