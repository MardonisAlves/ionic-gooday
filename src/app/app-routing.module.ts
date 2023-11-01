import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./screen/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'well',
    loadComponent: () => import('./screen/wellcome/wellcome.component').then( c => c.WellcomeComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./screen/login/login.component').then( c => c.LoginComponent)
  },
  {
    path: 'viva',
    loadComponent: () => import('./screen/viva-bem/viva-bem.component').then( c => c.VivaBemComponent)
  },
  {
    path: 'treine',
    loadComponent: () => import('./screen/treine/treine.component').then( c => c.TreineComponent)
  },
  {
    path: 'alimentar',
    loadComponent: () => import('./screen/alimentar/alimentar.component').then( c => c.AlimentarComponent)
  },
  {
    path: 'compartilhar',
    loadComponent: () => import('./screen/compatilhar/compatilhar.component').then( c => c.CompatilharComponent)
  },
  {
    path: 'name',
    loadComponent: () => import('./screen/name/name.component').then( c => c.NameComponent)
  },
  {
    path: 'genero',
    loadComponent: () => import('./screen/genero/genero.component').then( c => c.GeneroComponent)
  },
  {
    path: 'nascimento',
    loadComponent: () => import('./screen/screen-data-nascimento/screen-data-nascimento.component').then( c => c.ScreenDataNascimentoComponent)
  },
  {
    path: 'foto',
    loadChildren: () => import('./screen/tirar-foto/tirar-foto.module').then( m => m.TirarFotoModule)
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
