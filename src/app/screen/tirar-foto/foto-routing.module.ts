import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TirarFotoComponent } from './tirar-foto.component';

const routes: Routes = [
  {
    path: '',
    component: TirarFotoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FotoPageRoutingModule {}
