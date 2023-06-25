import { Component, OnInit } from '@angular/core';
import {AccommodationObject} from "../../model/accommodation-object";
import {RoomService} from "../../service/room/room.service";
import {AccommodationObjectService} from "../../service/accommodation-object/accommodation-object.service";
import {ReservationService} from "../../service/reservation/reservation.service";
import {ActivatedRoute} from "@angular/router";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {Room} from "../../model/room";

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.css']
})
export class BookNowComponent implements OnInit {
  accommodationObject: AccommodationObject;
  currentRoomForFilter: Room;

  constructor(private route: ActivatedRoute,
              private accommodationObjectService: AccommodationObjectService,
              private reservationService: ReservationService,
              private roomService: RoomService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.accommodationObjectService.findById(id).subscribe(data => {
      this.accommodationObject = data;


        for (let i = 0; i < this.accommodationObject.room.length; i++) {
          this.roomService.findById(this.accommodationObject.room[i]).subscribe(room => {
            this.accommodationObject.room[room.id] = room;
            console.log(room);
          });
        }
      });
  }
  bookingFilter(date: Date): boolean {
    return date.getDate() > 20;
  }

}
