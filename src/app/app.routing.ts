import { Routes } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { ResponsesComponent } from "./views/responses/responses.component";
import { ProfileComponent } from './views/profile/profile.component';

export const routerConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'responses',
    component: ResponsesComponent,
    pathMatch: 'full',
  },
  {
    path: 'profile/:id',
    component: ProfileComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: ''
  },

]
