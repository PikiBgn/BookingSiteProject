import { User } from './user';
import { Room } from './room';

export class Reservation {
  id: number;
  user: User;
  roomId: Room;
  startDate: Date; // Change to Date type if required
  endDate: Date; // Change to Date type if required
}
