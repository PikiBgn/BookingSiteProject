import { Component, OnInit } from '@angular/core';
import {AccommodationObject} from "../../model/accommodation-object";
import {RoomService} from "../../service/room/room.service";
import {AccommodationObjectService} from "../../service/accommodation-object/accommodation-object.service";
import {ReservationService} from "../../service/reservation/reservation.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.css']
})
export class BookNowComponent implements OnInit {
  accommodationObject: AccommodationObject;
  constructor(private route: ActivatedRoute,
              private accommodationObjectService: AccommodationObjectService,
              private reservationService: ReservationService,
              private roomService: RoomService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.accommodationObjectService.findById(id).subscribe(data => {
      this.accommodationObject = data;

      this.roomService.findAll().subscribe(rooms => {
        this.accommodationObject.room = rooms;

        for (const room of this.accommodationObject.room) {
          this.reservationService.findById(room.id).subscribe(reservation => {
            room.reservations.push(reservation);
          });
        }
      });
    });
  }

}
