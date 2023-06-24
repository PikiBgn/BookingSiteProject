import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Localization } from '../../model/localization';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8765/localization';
  }

  public findAll(): Observable<Localization[]> {
    return this.http.get<Localization[]>(this.apiUrl);
  }

  public findById(id: number): Observable<Localization> {
    return this.http.get<Localization>(`${this.apiUrl}/${id}`);
  }

  public save(localization: Localization): Observable<Localization> {
    return this.http.post<Localization>(this.apiUrl, localization);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
