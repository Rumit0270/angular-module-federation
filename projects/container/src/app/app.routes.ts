import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
import { NotFoundComponent } from './not-found/not-found.component';

export const APP_ROUTES: Routes = [
  {
    path: 'first',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'first',
        exposedModule: './Module',
      }).then((m) => m.FirstFeatureModule),
  },
  {
    path: 'second',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'second',
        exposedModule: './Module',
      }).then((m) => m.SecondFeatureModule),
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
