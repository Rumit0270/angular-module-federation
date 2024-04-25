import { Routes } from '@angular/router';
import { HomeComponent } from './second-feature/home/home.component';
import { DetailsComponent } from './second-feature/details/details.component';

export const APP_ROUTES: Routes = [
  {
    path: 'details',
    component: DetailsComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];
