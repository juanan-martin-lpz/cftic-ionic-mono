import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ImcComponent } from './componentes/imc/imc.component';
import { EntradaDatosComponent } from './componentes/imc/entrada-datos/entrada-datos.component';
import { ResultadosComponent } from './componentes/imc/resultados/resultados.component';

@NgModule({
  declarations: [ AppComponent,
                  ImcComponent,
                  EntradaDatosComponent,
                  ResultadosComponent
                ],
  imports: [BrowserModule,
            FormsModule,
            RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
