import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnoService } from '../../servicios/alumno.service';
import { IAlumno } from '../../models/ialumno';
import { Alumno } from '../../models/alumno';

import bsCustomFileInput from 'bs-custom-file-input';

@Component({
  selector: 'angular-monorepo-form-alumno',
  templateUrl: './form-alumno.component.html',
  styleUrls: ['./form-alumno.component.css']
})
export class FormAlumnoComponent implements OnInit {

  private id: number;
  public alumno: IAlumno;
<<<<<<< HEAD
  public nuevo: boolean;
=======

  public imagen?: File;
  public imagenTemp?: string;
>>>>>>> alumnos

  constructor(private router: Router, private route: ActivatedRoute, private alumnoService: AlumnoService) {

    bsCustomFileInput.init();

    this.id = 0;
    this.alumno = new Alumno();

    const id = this.route.snapshot.paramMap.get('id') || 0;

    if (id) {
      this.id = +id;
    }

    this.alumnoService.obtenerAlumnoPorId(this.id).subscribe(alumno => {
      this.alumno = alumno;
    });


  }

  ngOnInit(): void {

  }

  guardar() {

<<<<<<< HEAD
    if (!this.nuevo) {
      this.alumnoService.modificarAlumno(this.alumno).subscribe(
        {
          complete: () => {
            this.router.navigateByUrl('/alumnos');
          },
          error: (e) => {
            console.log(e);
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
            console.log(e);
=======
    this.alumnoService.modificarAlumno(this.alumno).subscribe(
      {
        complete: () => {

          if (this.imagen !== undefined) {
            /*
            this.postService.uploadImage(this.thePost._id, this.imagen).then(resp => {
              this.router.navigate(['/blog']);
            })
            .catch(err => {

              console.log(err);
              this.router.navigate(['/blog']);

            });
            */
>>>>>>> alumnos
          }

          this.router.navigateByUrl('/alumno');
        },
        error: (e) => {
          // Gestion del error
        }
      }
    )
  }

  cancelar() {
    // Nos vamos
    this.router.navigateByUrl('/alumnos');
    //
  }

  seleccionImagen( event: Event ) {

    console.log('seleccion Image');

    // @ts-ignore: Object is possibly 'null'.
    const archivo = event.target.files[0];

    if ( !archivo ) {
      // @ts-ignore: Object is possibly 'null'.
      console.log('Archivo null');
      //this.imagen = null;
      return;
    }

    console.log('Archivo OK');

    this.imagen = archivo;

    const reader = new FileReader();

    // @ts-ignore: Object is possibly 'null'.
    reader.readAsDataURL( archivo );

    console.log('Archivo en imageTemp');

    // @ts-ignore: Object is possibly 'null'.
    reader.onloadend = () => this.imagenTemp = reader.result.toString();

  }
}
