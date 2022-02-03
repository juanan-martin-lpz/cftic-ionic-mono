import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonPanelComponent } from './componentes/button-panel/button-panel.component';
import { PlayPanelComponent } from './componentes/play-panel/play-panel.component';
import { ComputerPlayComponent } from './componentes/computer-play/computer-play.component';
import { ResultPanelComponent } from './componentes/result-panel/result-panel.component';
import { ButtonComponent } from './componentes/shared/button/button.component';

@NgModule({
  declarations: [AppComponent, ButtonPanelComponent, PlayPanelComponent, ComputerPlayComponent, ResultPanelComponent, ButtonComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
