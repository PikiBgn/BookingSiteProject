import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../../model/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8765/room';
  }

  public findAll(): Observable<Room[]> {
    return this.http.get<Room[]>(this.apiUrl);
  }

  public findById(id: number): Observable<Room> {
    return this.http.get<Room>(`${this.apiUrl}/${id}`);
  }

  public save(room: Room): Observable<Room> {
    return this.http.post<Room>(this.apiUrl, room);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
