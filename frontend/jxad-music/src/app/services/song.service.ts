import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private apiUrl = 'http://localhost:8080/api/songs';

  constructor(private http: HttpClient) {}

  getSongs(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  deleteSong(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
