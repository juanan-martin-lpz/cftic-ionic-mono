import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoAlumnosComponent } from './listado-alumnos/listado-alumnos.component';
import { FormAlumnoComponent } from './form-alumno/form-alumno.component';

const routes: Routes = [
  { path: '', component: ListadoAlumnosComponent },
  { path: 'edit/:id', component: FormAlumnoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
