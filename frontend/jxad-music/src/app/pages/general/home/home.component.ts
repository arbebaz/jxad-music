import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { UcfirstPipe } from '../../../pipes/ucfirst.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DatePipe, UcfirstPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
