import {Component, Input, OnInit} from '@angular/core';
import {Room} from "../../model/room";
import {RoomService} from "../../service/room/room.service";
import {ReservationService} from "../../service/reservation/reservation.service";
import {Reservation} from "../../model/reservation";

@Component({
  selector: 'app-room-element-calendar',
  templateUrl: './room-element-calendar.component.html',
  styleUrls: ['./room-element-calendar.component.css']
})
export class RoomElementCalendarComponent implements OnInit {
  @Input() room: Room;

  constructor(private roomService: RoomService, private reservationService :ReservationService) { }

  ngOnInit(): void {

    console.log("reservation: "+this.room.reservations);

    for (let i = 0; i < this.room.reservations.length; i++){
      this.reservationService.findById(this.room.reservations[i]).subscribe(reservation => {
        this.room.reservations[i] = reservation;

      });
    }
    console.log("reservations: "+this.room.reservations);
  }
  bookingFilter= (d: Date | null): boolean => {
    const date = d || new Date();
    const reservedDates: Date[] = [];

    for (const reservation of this.room.reservations) {
      const startDate: Date = new Date(reservation.startDate);
      const endDate: Date = new Date(reservation.endDate);

      console.log(reservation.startDate)
      console.log(reservation.endDate)

      // Iterate through dates between start and end date
      const currentDate: Date = new Date(startDate);
      while (currentDate < endDate) {// Increment to the next day
        reservedDates.push(new Date(currentDate)); // Add the current date
        currentDate.setDate(currentDate.getDate() + 1);
      }
      reservedDates.push(endDate);
    }

    for(const reservedDate of reservedDates){
      if(reservedDate.getFullYear() === date.getFullYear() && reservedDate.getMonth() === date.getMonth() &&
        reservedDate.getDate() === date.getDate()){
        return false;
      }
    }
    return true;}
}
