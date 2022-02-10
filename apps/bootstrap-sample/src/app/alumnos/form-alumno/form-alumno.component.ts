import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnoService } from '../../servicios/alumno.service';
import { IAlumno } from '../../models/ialumno';
import { AlumnosRoutingModule } from '../alumnos.routing';

@Component({
  selector: 'angular-monorepo-form-alumno',
  templateUrl: './form-alumno.component.html',
  styleUrls: ['./form-alumno.component.css']
})
export class FormAlumnoComponent implements OnInit {

  private id: number;
  public alumno!: IAlumno;

  constructor(private router: Router, private route: ActivatedRoute, private alumnoService: AlumnoService) {
    this.id = 0;

    this.route.queryParams.subscribe(params => this.id = params['id']);

    this.alumnoService.editarAlumno(this.id).subscribe(alumno => this.alumno = alumno);

  }

  ngOnInit(): void {

  }

}
