import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../../components/header/header.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-purchase-history',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './purchase-history.component.html',
  styleUrl: './purchase-history.component.css'
})
export class PurchaseHistoryComponent  implements OnInit {
  purchases = [
    {
      songTitle: 'Song Title 1',
      artist: 'Artist 1',
      purchaseDate: new Date(),
      price: 1.99,
      songUrl: 'url_to_song_1'
    },
    {
      songTitle: 'Song Title 2',
      artist: 'Artist 2',
      purchaseDate: new Date(),
      price: 2.99,
      songUrl: 'url_to_song_2'
    }
    // Ajoutez d'autres achats ici
  ];

  constructor() {}

  ngOnInit(): void {}

  downloadSong(songUrl: string) {
    window.open(songUrl, '_blank');
  }
}