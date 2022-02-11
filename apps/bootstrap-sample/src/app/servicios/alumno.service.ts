import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IAlumno } from '../models/ialumno';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private readonly REMOTE_SERVER = 'http://10.1.2.10:3000';
  private readonly LOCAL_SERVER = 'http://localhost:3000';
  private CURRENT_SERVER = '';


  constructor(private http: HttpClient) {
    this.CURRENT_SERVER = this.LOCAL_SERVER;
  }

  obtenerAlumnos(): Observable<IAlumno[]> {

    return this.http.get<IAlumno[]>(`${this.CURRENT_SERVER}/alumno`).pipe(
      tap(console.log)
    );

  }

  obtenerAlumnoPorId(id: number): Observable<IAlumno> {

    return this.http.get<IAlumno>(`${this.CURRENT_SERVER}/alumno/` + id.toString()).pipe(
      tap(console.log)
    );

  }

  modificarAlumno(alumno: IAlumno): Observable<void> {

    return this.http.put<void>(`${this.CURRENT_SERVER}/alumno`, alumno).pipe(
      tap(console.log)
    );

  }

  borrarAlumno(id: number): Observable<void> {

    return this.http.delete<void>(`${this.CURRENT_SERVER}/alumno/` + id.toString()).pipe(
      tap(console.log)
    );

  }

}
