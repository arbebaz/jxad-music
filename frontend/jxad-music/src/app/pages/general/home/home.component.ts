import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeService } from '../../../services/home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <h1>{{ homeData.title }}</h1>
    <p>{{ homeData.subtitle }}</p>
  `,
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
  homeData: any = {};

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getHomeData().subscribe({
      next: (data) => {
        this.homeData = data;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des données:', error);
      }
    });
  }
}