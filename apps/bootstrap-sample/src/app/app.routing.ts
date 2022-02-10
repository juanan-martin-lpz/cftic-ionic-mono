import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DniComponent } from './componentes/dni/dni.component';
import { ImcComponent } from './componentes/imc/imc.component';
import { RpsComponent } from './componentes/rps/rps.component';

const routes: Routes = [
  { path: 'dni', component: DniComponent },
  { path: 'imc', component: ImcComponent },
  { path: 'rps', component: RpsComponent },
  { path: 'alumnos', loadChildren: () => import('./alumnos/alumnos.module').then(m => m.AlumnosModule) },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
