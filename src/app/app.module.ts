import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { LoggerModule, NgxLoggerLevel } from "ngx-logger";

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WellcomeComponent } from './screen/wellcome/wellcome.component';
import { LoginComponent } from './screen/login/login.component';
import { TreineComponent } from './screen/treine/treine.component';
import { AlimentarComponent } from './screen/alimentar/alimentar.component';
import { CompatilharComponent } from './screen/compatilhar/compatilhar.component';
import { NameComponent } from './screen/name/name.component';
import { GeneroComponent } from './screen/genero/genero.component';
import { ScreenDataNascimentoComponent } from './screen/screen-data-nascimento/screen-data-nascimento.component';
import { PipePipe } from './pipes/pipe.pipe';
import { TirarFotoModule } from './screen/tirar-foto/tirar-foto.module';

@NgModule({
  declarations: [AppComponent, PipePipe],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    LoggerModule.forRoot({
      serverLoggingUrl: 'api/logs',
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR
    }),
    AppRoutingModule, 
    TirarFotoModule,
    WellcomeComponent, 
    LoginComponent, 
    TreineComponent,
    AlimentarComponent,
    CompatilharComponent,
    NameComponent,
    GeneroComponent,
    ScreenDataNascimentoComponent
    
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
