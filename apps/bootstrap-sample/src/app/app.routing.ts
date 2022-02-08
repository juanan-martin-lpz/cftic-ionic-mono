import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DniComponent } from './componentes/dni/dni.component';
import { ImcComponent } from './componentes/imc/imc.component';
import { RpsComponent } from './componentes/rps/rps.component';

const routes: Routes = [
  { path: 'dni', component: DniComponent },
  { path: 'imc', component: ImcComponent },
  { path: 'rps', component: RpsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
