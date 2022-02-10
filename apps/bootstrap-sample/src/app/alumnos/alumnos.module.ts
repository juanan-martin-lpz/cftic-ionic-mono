import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListadoAlumnosComponent } from './listado-alumnos/listado-alumnos.component';
import { AlumnosComponent } from './alumnos.component';
import { AlumnosRoutingModule } from './alumnos.routing';
import { FormAlumnoComponent } from './form-alumno/form-alumno.component';



@NgModule({
  declarations: [
  AlumnosComponent, ListadoAlumnosComponent, FormAlumnoComponent
  ],
  imports: [
    CommonModule, /* FormsModule, BrowserModule,*/ AlumnosRoutingModule
  ]
})
export class AlumnosModule { }
