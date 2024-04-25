import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { SharedLibModule } from "projects/shared-lib/src/public-api";

import { APP_ROUTES } from "../app.routes";
import { HomeComponent } from "./home/home.component";
import { TodosComponent } from "./todos/todos.component";

@NgModule({
  declarations: [TodosComponent, HomeComponent],
  imports: [CommonModule, RouterModule.forChild(APP_ROUTES), SharedLibModule],
})
export class FirstFeatureModule {}
