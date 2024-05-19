import { Component } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'], 
})
export class UserProfileComponent {
  user: User = { username: '', password: '', role: 'ARTISTE' };

  constructor(private userService: UserService) {}

  register() {
    this.userService.register(this.user).subscribe((response) => {
      console.log('User registered successfully', response);
    });
  }
}
