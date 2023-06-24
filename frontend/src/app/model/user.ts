import { Reservation } from './reservation';
import {AccommodationObject} from "./accommodation-object";

export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  birthdate: string; // Change to Date type if required
  password: string;
  failedAttempts: number;
  isLocked: boolean;
  whenAccountLocked: string; // Change to Date type if required
  role: UserRole;
  reservation: Reservation[];
  accommodationObjects: AccommodationObject[];
}

export enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN'
}
