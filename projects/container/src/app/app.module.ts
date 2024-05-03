import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import {
  loadRemoteEntry,
  loadRemoteModule,
} from '@angular-architects/module-federation-runtime';

export function initializeApp(): () => void {
  return () => {
    console.log('Okay');
    return loadRemoteModule({
      remoteEntry: 'http://localhost:3000/remoteEntry.js',
      remoteName: 'thirdApp',
      exposedModule: './App',
    })
      .then((m) => console.log('module loaded', m))
      .catch(console.error);
  };
}

@NgModule({
  declarations: [AppComponent, NotFoundComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initializeApp,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
