import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/general/not-found/not-found.component';
import { HomeComponent } from './pages/general/home/home.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'register', component: UserProfileComponent },
  { path: '**', redirectTo: 'register' }, // Redirection vers page inscription

  { path: '***', component: NotFoundComponent },
];
