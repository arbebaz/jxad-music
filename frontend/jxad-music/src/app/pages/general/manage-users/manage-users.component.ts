import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../../components/header/header.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-manage-users',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './manage-users.component.html',
  styleUrl: './manage-users.component.css'
})
export class ManageUsersComponent implements OnInit {
  users = [
    {
      id: 1,
      username: 'Utilisateur 1',
      email: 'utilisateur1@example.com',
      role: 'Artiste'
    },
    {
      id: 2,
      username: 'Utilisateur 2',
      email: 'utilisateur2@example.com',
      role: 'Beatmaker'
    }
    // Ajoutez d'autres utilisateurs ici
  ];

  constructor() {}

  ngOnInit(): void {}

  editUser(userId: number) {
    // Implémenter la logique de modification de l'utilisateur
    console.log('Modification de l\'utilisateur:', userId);
  }

  deleteUser(userId: number) {
    // Implémenter la logique de suppression de l'utilisateur
    console.log('Suppression de l\'utilisateur:', userId);
  }
}