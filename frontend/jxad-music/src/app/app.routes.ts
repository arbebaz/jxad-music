import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/general/not-found/not-found.component';
import { HomeComponent } from './pages/general/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: '***', component: NotFoundComponent },
];
