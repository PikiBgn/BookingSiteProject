import { AccommodationObject } from './accommodation-object';
import {Reservation} from "./reservation";

export class Room {
  id: number;
  price: number;
  name: string;
  numberOfPeople: number;
  accommodationObject: AccommodationObject;
  reservations : Reservation[];
}
