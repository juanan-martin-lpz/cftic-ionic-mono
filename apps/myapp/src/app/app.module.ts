import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

import { PresentacionComponent } from './presentacion/presentacion.component';
import { DniComponent } from './componentes/dni/dni.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ AppComponent,
                  NxWelcomeComponent,
                  PresentacionComponent,
                  DniComponent
                ],
  imports: [BrowserModule,
            FormsModule,
            RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
