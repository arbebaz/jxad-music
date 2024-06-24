import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  // Le tuyau posé dans le template de internal links fais passer la donnée vers la propriéte pageName ci dessous :

  @Input() pageName!: string;

  // En arrivant dans le template de Topnav la donnée contenue dans pageName qui provient du composant page va pouvoir
  // etre utilisée pour selectionner une classe 'Active' de l'item de menu concerné par la page.
}
