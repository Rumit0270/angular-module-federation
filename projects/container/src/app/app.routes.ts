import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation-runtime';

import { HomeComponent } from './home/home.component';
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
    path: 'third',
    // Define route as children to make all sub routes of React app work
    children: [
      {
        path: '**',
        component: WebComponentWrapper,
        data: {
          type: 'script',
          remoteEntry: 'http://localhost:3000/remoteEntry.js',
          remoteName: 'thirdApp',
          exposedModule: './App',
          elementName: 'react-element',
        } as WebComponentWrapperOptions,
      },
    ],
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
