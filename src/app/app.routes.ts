import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage)
  },
  {
    path: 'api-spring',
    loadComponent: () => import('./api-spring/api-spring.page').then(m => m.ApiSpringPage)
  },
];
