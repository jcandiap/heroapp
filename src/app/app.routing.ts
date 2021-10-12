import { Routes } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";

export const routerConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
]
