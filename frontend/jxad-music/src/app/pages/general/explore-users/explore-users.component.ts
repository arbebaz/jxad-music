import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-explore-users',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, FormsModule, RouterLink],
  templateUrl: './explore-users.component.html',
  styleUrl: './explore-users.component.css'
})
export class ExploreUsersComponent implements OnInit {
  users: any[] = []; // Définissez le type correct pour vos utilisateurs (peut-être un modèle d'utilisateur)

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    // Exemple : Appel à votre service pour récupérer les utilisateurs
    this.userService.getUsers().subscribe(
      (response: any) => {
        this.users = response.users; // Supposons que votre service retourne un objet contenant un tableau d'utilisateurs
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des utilisateurs : ', error);
      }
    );
  }
}