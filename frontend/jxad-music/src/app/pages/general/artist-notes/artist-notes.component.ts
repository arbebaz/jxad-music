import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../../components/header/header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-artist-notes',
  standalone: true,
  imports: [RouterLink, CommonModule, HeaderComponent, FooterComponent, FormsModule],
  templateUrl: './artist-notes.component.html',
  styleUrl: './artist-notes.component.css'
})
export class ArtistNotesComponent implements OnInit {
  notes: { id: number; title: string; content: string }[] = [];
  newNote: { title: string; content: string } = { title: '', content: '' };

  constructor() {}

  ngOnInit(): void {
    this.loadNotes();
  }

  loadNotes() {
    // Simulate loading notes from a backend
    this.notes = [
      { id: 1, title: 'Note 1', content: 'Content of note 1' },
      { id: 2, title: 'Note 2', content: 'Content of note 2' },
    ];
  }

  addNote() {
    const newId = this.notes.length > 0 ? this.notes[this.notes.length - 1].id + 1 : 1;
    this.notes.push({ id: newId, ...this.newNote });
    this.newNote = { title: '', content: '' };
  }

  deleteNote(id: number) {
    this.notes = this.notes.filter(note => note.id !== id);
  }
}
