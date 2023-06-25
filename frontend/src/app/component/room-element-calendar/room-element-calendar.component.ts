import {Component, Input, OnInit} from '@angular/core';
import {Room} from "../../model/room";
import {RoomService} from "../../service/room/room.service";
import {ReservationService} from "../../service/reservation/reservation.service";
import {Reservation} from "../../model/reservation";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-room-element-calendar',
  templateUrl: './room-element-calendar.component.html',
  styleUrls: ['./room-element-calendar.component.css']
})
export class RoomElementCalendarComponent implements OnInit {
  @Input() room: Room;
  reservationObjectSave: Reservation = new Reservation();
  RoomSave: Room = new Room();
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  startDate: string;
  endDate: string;
  constructor(private roomService: RoomService, private reservationService :ReservationService, private router: Router) { }

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

  saveReservation() {
    if(this.range.value.start != undefined && this.range.value.start != null )
      this.range.value.end != undefined && this.range.value.end != null
    console.log(this.room.id);
    console.log(this.room);
    this.reservationObjectSave.roomId = this.RoomSave;
    this.reservationObjectSave.roomId.id = this.room.id;

    console.log(this.range.value.start);
    if (this.range.value.start) {
      this.startDate = this.range.value.start.toISOString().split('T')[0];
    } else {
      this.router.navigate(['/book_now'])
    }
    if (this.range.value.end) {
      this.endDate = this.range.value.end.toISOString().split('T')[0];
    } else {
      this.router.navigate(['/book_now'])
    }
    // @ts-ignore
    this.reservationObjectSave.startDate=this.startDate;
// @ts-ignore
    this.reservationObjectSave.endDate=this.endDate;
console.log(this.reservationObjectSave);
    this.reservationService.save(this.reservationObjectSave).subscribe( result => this.router.navigate(['/about']))
  }
}
