import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

import { PresentacionComponent } from './presentacion/presentacion.component';
import { DniComponent } from './componentes/dni/dni.component';

@NgModule({
  declarations: [ AppComponent,
                  NxWelcomeComponent,
                  PresentacionComponent,
                  DniComponent
                ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
