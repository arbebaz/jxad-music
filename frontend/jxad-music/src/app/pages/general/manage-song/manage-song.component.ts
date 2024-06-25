import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HeaderComponent } from '../../../components/header/header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { SongService } from '../../../services/song.service';

@Component({
  selector: 'app-manage-song',
  standalone: true,
  imports: [RouterLink, CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './manage-song.component.html',
  styleUrl: './manage-song.component.css'
})
export class ManageSongsComponent implements OnInit {
  songs: any[] = [];

  constructor(private songSevice: SongService, private router: Router) {}

  ngOnInit(): void {
    this.loadSongs();
  }

  loadSongs() {
    this.songSevice.getSongs().subscribe((data: any) => {
      this.songs = data;
    });
  }

  editSong(song: any) {
    // Redirect to edit song page or open modal
  }

  deleteSong(songId: number) {
    this.songSevice.deleteSong(songId).subscribe(() => {
      this.loadSongs(); // Reload songs after deletion
    });
  }
}
