import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { DniComponent } from './componentes/dni/dni.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
<<<<<<< HEAD
  declarations: [ AppComponent,
                  NxWelcomeComponent,
                  PresentacionComponent,
                  DniComponent
                ],
  imports: [BrowserModule,
            FormsModule,
            RouterModule],
=======
  declarations: [
    AppComponent,
    DniComponent,
    ImcComponent,
    EntradaDatosComponent,
    ResultadosComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule],
>>>>>>> c38d47d (IMC: Creada app y transferidos componentes)
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
