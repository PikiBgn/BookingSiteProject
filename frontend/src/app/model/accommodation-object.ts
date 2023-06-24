import { AccommodationObjectType } from './accommodation-object-type';
import { User } from './user';
import { Localization } from './localization';
import { Room } from './room';

export class AccommodationObject {
  id: number;
  name: string;
  accommodationObjectType: AccommodationObjectType;
  owner: User;
  localisation: Localization;
  description: string;
  header: string;
  stars: number;
  room: Room[];
}
