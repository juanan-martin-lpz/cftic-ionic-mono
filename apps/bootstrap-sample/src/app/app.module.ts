import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app.routing';
import { SampleUnoComponent } from './componentes/sample-uno/sample-uno.component';
import { SampleDosComponent } from './componentes/sample-dos/sample-dos.component';
import { ImcComponent } from './componentes/imc/imc.component';
import { DniComponent } from './componentes/dni/dni.component';
import { EntradaDatosComponent } from './componentes/imc/entrada-datos/entrada-datos.component';
import { ErrorComponent } from './componentes/imc/error/error.component';
import { ImagenComponent } from './componentes/imc/imagen/imagen.component';
import { ResultadosComponent } from './componentes/imc/resultados/resultados.component';
import { RpsComponent } from './componentes/rps/rps.component';

@NgModule({
  declarations: [AppComponent,
                ImcComponent,
                DniComponent ,
                EntradaDatosComponent,
                ErrorComponent,
                ImagenComponent,
                ResultadosComponent,
                SampleUnoComponent,
                SampleDosComponent,
                RpsComponent],
  imports: [BrowserModule, FormsModule, LayoutModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
