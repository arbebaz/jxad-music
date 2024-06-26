import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'assets/data/users.json'; // Chemin vers votre fichier JSON ou votre API

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    // Exemple de récupération depuis un fichier JSON statique
    // Vous devez remplacer cette logique avec votre propre logique d'API
    return this.http.get<any[]>(this.usersUrl);
  }
}