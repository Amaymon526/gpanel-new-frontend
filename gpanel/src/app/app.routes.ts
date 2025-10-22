import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';

export const routes: Routes = [
  {
    path: '',
    component: LandingPage
  },
  {
    path: 'server/:id',
    loadComponent: () => import('./components/server-detail/server-detail').then(m => m.ServerDetail)
  }
];
