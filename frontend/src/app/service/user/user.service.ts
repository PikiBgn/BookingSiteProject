import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8765/user';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  public findById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  public save(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
