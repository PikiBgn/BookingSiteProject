import { User } from './user';
import { Room } from './room';

export class Reservation {
  id: number;
  user: User;
  roomId: Room;
  startDate: string; // Change to Date type if required
  endDate: string; // Change to Date type if required
}
