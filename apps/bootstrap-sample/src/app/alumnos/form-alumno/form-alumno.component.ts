import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnoService } from '../../servicios/alumno.service';
import { IAlumno } from '../../models/ialumno';
import { Alumno } from '../../models/alumno';

@Component({
  selector: 'angular-monorepo-form-alumno',
  templateUrl: './form-alumno.component.html',
  styleUrls: ['./form-alumno.component.css']
})
export class FormAlumnoComponent implements OnInit {

  private id: number;
  public alumno: IAlumno;
  public nuevo: boolean;

  constructor(private router: Router, private route: ActivatedRoute, private alumnoService: AlumnoService) {

    this.id = 0;
    this.alumno = new Alumno();

    this.nuevo = true;

    const id = this.route.snapshot.paramMap.get('id') || 0;

    if (id) {
      this.id = +id;
    }

    if (this.id > 0) {
      this.nuevo = false;
      this.alumnoService.obtenerAlumnoPorId(this.id).subscribe(alumno => {
        this.alumno = alumno;
      });
    }


  }

  ngOnInit(): void {

  }

  guardar() {

    if (!this.nuevo) {
      this.alumnoService.modificarAlumno(this.alumno).subscribe(
        {
          complete: () => {
            this.router.navigateByUrl('/alumnos');
          },
          error: (e) => {
            // Gestion del error
          }
        }
      )
    }
    else {
      this.alumnoService.nuevoAlumno(this.alumno).subscribe(
        {
          complete: () => {
            this.router.navigateByUrl('/alumnos');
          },
          error: (e) => {
            // Gestion del error
          }
        }
      )
    }
  }

  cancelar() {
    // Nos vamos
    this.router.navigateByUrl('/alumnos');
    //
  }
}
