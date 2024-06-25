import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../../components/header/header.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-upload-lyrics',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './upload-lyrics.component.html',
  styleUrls: ['./upload-lyrics.component.css']
})
export class UploadLyricsComponent {
  lyrics = {
    title: '',
    description: '',
    category: '',
    file: 'null'
  };

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.lyrics.file = file;
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('title', this.lyrics.title);
    formData.append('description', this.lyrics.description);
    formData.append('category', this.lyrics.category);
    formData.append('file', this.lyrics.file);

    // Call your backend service to upload the lyrics
    // this.lyricsService.uploadLyrics(formData).subscribe(response => {
    //   console.log('Lyrics uploaded successfully', response);
    // });

    alert('Paroles téléchargées avec succès !');
  }
}
