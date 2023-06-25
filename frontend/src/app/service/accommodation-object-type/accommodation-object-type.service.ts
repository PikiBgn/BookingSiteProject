import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccommodationObjectType } from '../../model/accommodation-object-type';

@Injectable({
  providedIn: 'root'
})
export class AccommodationObjectTypeService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8765/accommodation-object-type';
  }

  public findAll(): Observable<AccommodationObjectType[]> {
    return this.http.get<AccommodationObjectType[]>(this.apiUrl);
  }

  public findById(id: AccommodationObjectType): Observable<AccommodationObjectType> {
    return this.http.get<AccommodationObjectType>(`${this.apiUrl}/${id}`);
  }

  public save(accommodationObjectType: AccommodationObjectType): Observable<AccommodationObjectType> {
    return this.http.post<AccommodationObjectType>(this.apiUrl, accommodationObjectType);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
