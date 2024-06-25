import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { HeaderComponent } from '../../../components/header/header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { BeatService } from '../../../services/beat.service';

@Component({
  selector: 'app-manage-beats',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './manage-beats.component.html',
  styleUrls: ['./manage-beats.component.css']
})
export class ManageBeatsComponent implements OnInit {
  beats: any[] = [];

  constructor(private beatService: BeatService, private router: Router) {}

  ngOnInit(): void {
    this.loadBeats();
  }

  loadBeats() {
    this.beatService.getBeat().subscribe((data: any) => {
      this.beats = data;
    });
  }

  editBeat(beat: any) {
    // Redirect to edit beat page or open modal
  }

  deleteBeat(beatId: number) {
    this.beatService.deleteBeat(beatId).subscribe(() => {
      this.loadBeats(); // Reload beats after deletion
    });
  }
}
