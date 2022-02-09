import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListadoAlumnosComponent } from './listado-alumnos/listado-alumnos.component';



@NgModule({
  declarations: [
    ListadoAlumnosComponent
  ],
  imports: [
    CommonModule, FormsModule, BrowserModule
  ]
})
export class AlumnosModule { }
