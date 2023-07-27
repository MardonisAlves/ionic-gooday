import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'well',
    loadComponent: () => import('./wellcome/wellcome.component').then( c => c.WellcomeComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then( c => c.LoginComponent)
  },
  {
    path: 'viva',
    loadComponent: () => import('./viva-bem/viva-bem.component').then( c => c.VivaBemComponent)
  },
  {
    path: 'treine',
    loadComponent: () => import('./treine/treine.component').then( c => c.TreineComponent)
  },
  {
    path: 'alimentar',
    loadComponent: () => import('./alimentar/alimentar.component').then( c => c.AlimentarComponent)
  },
  {
    path: 'compartilhar',
    loadComponent: () => import('./compatilhar/compatilhar.component').then( c => c.CompatilharComponent)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
