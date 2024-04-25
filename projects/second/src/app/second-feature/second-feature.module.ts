import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedLibModule } from 'shared-lib';

import { APP_ROUTES } from '../app.route';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [HomeComponent, DetailsComponent],
  imports: [CommonModule, RouterModule.forChild(APP_ROUTES), SharedLibModule],
})
export class SecondFeatureModule {}
