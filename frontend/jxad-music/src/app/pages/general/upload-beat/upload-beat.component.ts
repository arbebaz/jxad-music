import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../../components/header/header.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-upload-beat',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './upload-beat.component.html',
  styleUrls: ['./upload-beat.component.css']
})
export class UploadBeatComponent {
  beat = {
    title: '',
    description: '',
    category: '',
    file: 'null'
  };

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.beat.file = file;
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('title', this.beat.title);
    formData.append('description', this.beat.description);
    formData.append('category', this.beat.category);
    formData.append('file', this.beat.file);

    // Call your backend service to upload the beat
    // this.beatService.uploadBeat(formData).subscribe(response => {
    //   console.log('Beat uploaded successfully', response);
    // });

    alert('Beat téléchargé avec succès !');
  }
}
