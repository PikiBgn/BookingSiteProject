import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import {AccommodationObject} from "../../model/accommodation-object";


@Injectable(
  {
    "providedIn": "root"
  }
)
export class AccommodationObjectService {

  private apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8765/accommodation-object';
  }
  public findAll(): Observable<AccommodationObject[]> {
    return this.http.get<AccommodationObject[]>(this.apiUrl);
  }
  public findById(id: number): Observable<AccommodationObject> {
    return this.http.get<AccommodationObject>(`${this.apiUrl}/${id}`);
  }
  public save(accommodationObject: AccommodationObject) {
    return this.http.post<AccommodationObject>(this.apiUrl, accommodationObject);
  }
  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
