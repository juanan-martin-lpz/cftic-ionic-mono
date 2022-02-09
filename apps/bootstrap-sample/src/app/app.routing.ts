import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DniComponent } from './componentes/dni/dni.component';
import { ImcComponent } from './componentes/imc/imc.component';
import { RpsComponent } from './componentes/rps/rps.component';
import { ListadoAlumnosComponent } from './alumnos/listado-alumnos/listado-alumnos.component';
import { AlumnosModule } from './alumnos/alumnos.module';

const routes: Routes = [
  { path: 'dni', component: DniComponent },
  { path: 'imc', component: ImcComponent },
  { path: 'rps', component: RpsComponent },
  { path: 'alumnos', component: ListadoAlumnosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AlumnosModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
