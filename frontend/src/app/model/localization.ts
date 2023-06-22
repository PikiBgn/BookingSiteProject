import { AccommodationObject } from './accommodation-object';

export class Localization {
  id: number;
  country: string;
  city: string;
  postCode: string;
  street: string;
  houseNumber: number;
  latitude: number;
  longitude: number;
  accommodationObject: AccommodationObject;
}
