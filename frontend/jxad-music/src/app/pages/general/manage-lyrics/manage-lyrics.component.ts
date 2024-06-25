import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { HeaderComponent } from '../../../components/header/header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { LyricsService } from '../../../services/lyrics.service';

@Component({
  selector: 'app-manage-lyrics',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './manage-lyrics.component.html',
  styleUrls: ['./manage-lyrics.component.css']
})
export class ManageLyricsComponent implements OnInit {
  lyrics: any[] = [];

  constructor(private lyricsService: LyricsService, private router: Router) {}

  ngOnInit(): void {
    this.loadLyrics();
  }

  loadLyrics() {
    this.lyricsService.getLyrics().subscribe((data: any) => {
      this.lyrics = data;
    });
  }

  editLyric(lyric: any) {
    // Redirect to edit lyric page or open modal
  }

  deleteLyric(lyricId: number) {
    this.lyricsService.deleteLyric(lyricId).subscribe(() => {
      this.loadLyrics(); // Reload lyrics after deletion
    });
  }
}
