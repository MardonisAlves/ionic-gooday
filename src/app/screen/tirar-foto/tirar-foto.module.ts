import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TirarFotoComponent } from './tirar-foto.component';
import { IonicModule } from '@ionic/angular';
import { FotoPageRoutingModule } from './foto-routing.module';



@NgModule({
  declarations: [TirarFotoComponent],
  imports: [
    CommonModule,
    IonicModule,
    FotoPageRoutingModule,
    IonicModule
  ],
  providers:[]
})
export class TirarFotoModule { }
