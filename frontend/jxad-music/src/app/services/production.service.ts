import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductionService {
  private productionsUrl = 'assets/data/productions.json'; // Chemin vers votre fichier JSON ou votre API

  constructor(private http: HttpClient) { }

  getProductions(): Observable<any[]> {
    // Exemple de récupération depuis un fichier JSON statique
    // Vous devez remplacer cette logique avec votre propre logique d'API
    return this.http.get<any[]>(this.productionsUrl);
  }
}