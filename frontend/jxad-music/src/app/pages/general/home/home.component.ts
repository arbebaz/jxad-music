// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
// import { HomeService } from '../../../services/home.service';

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [CommonModule, HttpClientModule],
//   template: `
//     <h1>Bienvenue sur JXAD Music</h1>
//     <p>La plateforme de partage de musique</p>
//   `,
//   providers: [HomeService]
// })
// export class HomeComponent implements OnInit {
//   homeData: any = {};

//   constructor(private homeService: HomeService) { }

//   ngOnInit() {
//     this.homeService.getHomeData().subscribe({
//       next: (data) => {
//         this.homeData = data;
//       },
//       error: (error) => {
//         console.error('Erreur lors de la récupération des données:', error);
//       }
//     });
//   }
// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../components/header/header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    CommonModule,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}

// @Component({
//   selector: 'app-explore-users',
//   standalone: true,
//   imports: [HeaderComponent, FooterComponent, CommonModule, FormsModule, RouterLink],
//   templateUrl: './explore-users.component.html',
//   styleUrl: './explore-users.component.css'
// })
