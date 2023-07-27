import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { LoginComponent } from './login/login.component';
import { TreineComponent } from './treine/treine.component';
import { AlimentarComponent } from './alimentar/alimentar.component';
import { CompatilharComponent } from './compatilhar/compatilhar.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    WellcomeComponent, 
    LoginComponent, 
    TreineComponent,
    AlimentarComponent,
    CompatilharComponent
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
