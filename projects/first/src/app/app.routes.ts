import { Routes } from "@angular/router";
import { TodosComponent } from "./first-feature/todos/todos.component";
import { HomeComponent } from "./first-feature/home/home.component";

export const APP_ROUTES: Routes = [
  {
    path: "todos",
    component: TodosComponent,
  },
  {
    path: "",
    component: HomeComponent,
  },
];
