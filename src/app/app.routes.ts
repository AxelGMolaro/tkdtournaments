import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'flags-mode-page',
    loadComponent: () => import('./flags-mode-page/flags-mode-page.page').then( m => m.FlagsModePagePage)
  },
];
