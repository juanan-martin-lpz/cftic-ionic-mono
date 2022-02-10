import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoAlumnosComponent } from './listado-alumnos/listado-alumnos.component';



const routes: Routes = [
  { path: '', component: ListadoAlumnosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
