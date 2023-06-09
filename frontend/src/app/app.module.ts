import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { AboutComponent } from './component/about/about.component';
import {AppRoutingModule} from "./general/routes/app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateOfferComponent } from './create-offer/create-offer.component';
import {AuthService} from "./general/auth/auth.service";
import {AccommodationObjectService} from "./service/accommodation-object/accommodation-object.service";
import {HttpClientModule} from "@angular/common/http";
import {TestComponent} from "./component/test/test.component";
import {AccommodationObjectTypeService} from "./service/accommodation-object-type/accommodation-object-type.service";
import {LocalizationService} from "./service/localization/localization.service";
import {ReservationService} from "./service/reservation/reservation.service";
import {RoomService} from "./service/room/room.service";
import {UserService} from "./service/user/user.service";
import {ResponseStatusHandler} from "./general/response-status/response-status.service";
import {BookComponent} from "./component/book/book.component";
import {RegisterPanelComponent} from "./component/register-panel/register-panel.component";
import {HomeComponent} from "./component/home/home.component";
import { LoginPanelComponent } from './component/login-panel/login-panel.component';
import { AccommodationObjectDetailsComponent } from './component/accommodation-object-details/accommodation-object-details.component';
import { BookNowComponent } from './component/book-now/book-now.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import { RoomElementCalendarComponent } from './component/room-element-calendar/room-element-calendar.component';
import {JsonPipe, NgIf} from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    BookComponent,
    RegisterPanelComponent,
    HomeComponent,
    TestComponent,
    AccommodationObjectDetailsComponent,
    CreateOfferComponent,
    LoginPanelComponent,
    BookNowComponent,
    RoomElementCalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MatSelectModule,MatFormFieldModule, MatDatepickerModule, MatNativeDateModule,MatInputModule,
    NgIf,
    JsonPipe
  ],
  providers: [AuthService,ResponseStatusHandler,AccommodationObjectService, AccommodationObjectTypeService, LocalizationService, ReservationService, RoomService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
