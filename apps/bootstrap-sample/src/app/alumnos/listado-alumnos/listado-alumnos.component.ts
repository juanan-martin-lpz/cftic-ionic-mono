import { Component, OnInit } from '@angular/core';
import { IAlumno } from '../../models/ialumno';
import { AlumnoService } from '../../servicios/alumno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'angular-monorepo-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.css']
})
export class ListadoAlumnosComponent implements OnInit {

  public lista_alumnos: IAlumno[];

  constructor(private alumnoService: AlumnoService, private router: Router) {

    this.lista_alumnos = [];

    this.alumnoService.obtenerAlumnos().subscribe(lista => this.lista_alumnos = lista);
  }

  ngOnInit(): void {
  }


  borrar(id: number): void {
    this.alumnoService.borrarAlumno(id).subscribe();

    this.router.navigateByUrl('/alumnos');

  }

}
