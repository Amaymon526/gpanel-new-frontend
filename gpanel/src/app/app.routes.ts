import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';

export const routes: Routes = [
  {
    path: '',
    component: LandingPage
  },
  {
    path: 'server/:id',
    loadComponent: () => import('./components/server-detail-advanced/server-detail-advanced').then(m => m.ServerDetailAdvanced)
  }
];
