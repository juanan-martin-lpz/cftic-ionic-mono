import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IAlumno } from '../models/ialumno';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {


  constructor(private http: HttpClient) {

  }

  obtenerAlumnos(): Observable<IAlumno[]> {

    return this.http.get<IAlumno[]>('http://10.1.2.10:8085/').pipe(
      tap(console.log)
    );

  }

  editarAlumno(id: number): Observable<IAlumno> {

    return this.http.get<IAlumno>('http://10.1.2.10:8085/' + id.toString()).pipe(
      tap(console.log)
    );

  }

  borrarAlumno(id: number): Observable<void> {

    return this.http.delete<void>('http://10.1.2.10:8085/' + id.toString()).pipe(
      tap(console.log)
    );

  }

}
