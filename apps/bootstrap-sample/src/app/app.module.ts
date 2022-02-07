import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app.routing';
import { SampleUnoComponent } from './componentes/sample-uno/sample-uno.component';
import { SampleDosComponent } from './componentes/sample-dos/sample-dos.component';

@NgModule({
  declarations: [AppComponent, SampleUnoComponent, SampleDosComponent],
  imports: [BrowserModule, LayoutModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
