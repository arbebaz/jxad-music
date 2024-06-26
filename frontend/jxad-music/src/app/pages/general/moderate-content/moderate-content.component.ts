import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../../components/header/header.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-moderate-content',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './moderate-content.component.html',
  styleUrl: './moderate-content.component.css'
})
export class ModerateContentComponent implements OnInit {
  contents = [
    {
      id: 1,
      title: 'Chanson 1',
      user: 'Utilisateur 1',
      date: new Date(),
      coverUrl: 'assets/images/song1-cover.jpg'
    },
    {
      id: 2,
      title: 'Chanson 2',
      user: 'Utilisateur 2',
      date: new Date(),
      coverUrl: 'assets/images/song2-cover.jpg'
    }
    // Ajoutez d'autres contenus ici
  ];

  constructor() {}

  ngOnInit(): void {}

  approveContent(contentId: number) {
    // Implémenter la logique d'approbation du contenu
    console.log('Contenu approuvé:', contentId);
  }

  deleteContent(contentId: number) {
    // Implémenter la logique de suppression du contenu
    console.log('Contenu supprimé:', contentId);
  }
}