import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../../components/header/header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-upload-song',
  standalone: true,
  imports: [RouterLink, CommonModule, HeaderComponent, FooterComponent, FormsModule],
  templateUrl: './upload-song.component.html',
  styleUrl: './upload-song.component.css',
})
export class UploadSongComponent {
  song = {
    title: '',
    description: '',
    category: '',
    file: '' // A MODIFIER, JAI MIT '' A LA PLACE DE NULL 
  };

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.song.file = file;
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('title', this.song.title);
    formData.append('description', this.song.description);
    formData.append('category', this.song.category);
    formData.append('file', this.song.file);
    

    // Call your backend service to upload the song
    // this.songService.uploadSong(formData).subscribe(response => {
    //   console.log('Song uploaded successfully', response);
    // });

    alert('Chanson téléchargée avec succès !');
  }
}
