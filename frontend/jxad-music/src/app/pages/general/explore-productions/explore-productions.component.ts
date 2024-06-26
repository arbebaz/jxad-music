import { Component, OnInit } from '@angular/core';
import { ProductionService } from '../../../services/production.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../../components/footer/footer.component';
import { HeaderComponent } from '../../../components/header/header.component';

@Component({
  selector: 'app-explore-productions',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, FormsModule, RouterLink],
  templateUrl: './explore-productions.component.html',
  styleUrl: './explore-productions.component.css'
})
export class ExploreProductionsComponent implements OnInit {
  productions: any[] = []; // Définissez le type correct pour vos productions (peut-être un modèle de production)

  constructor(private productionService: ProductionService) { }

  ngOnInit(): void {
    this.fetchProductions();
  }

  fetchProductions() {
    // Exemple : Appel à votre service pour récupérer les productions
    this.productionService.getProductions().subscribe(
      (response: any) => {
        this.productions = response.productions; // Supposons que votre service retourne un objet contenant un tableau de productions
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des productions : ', error);
      }
    );
  }
}