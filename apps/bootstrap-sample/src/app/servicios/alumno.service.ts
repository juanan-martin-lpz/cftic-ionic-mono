import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IAlumno } from '../models/ialumno';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private readonly REMOTE_SERVER = 'http://10.1.2.10:3000';
  private readonly LOCAL_SERVER = 'http://localhost:3000';
  private CURRENT_SERVER = '';

  private headers: HttpHeaders = new HttpHeaders({"Content-type": "application/json"});


  constructor(private http: HttpClient) {
    this.CURRENT_SERVER = this.REMOTE_SERVER;

    //this.headers = new HttpHeaders({"Content-type": "application/json"});
    //this.headers.set("Content-type", "application/json");
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

    console.log(this.headers);

    return this.http.put<IAlumno>(`${this.CURRENT_SERVER}/alumno/${alumno.id}`, alumno, { headers: this.headers }).pipe(
      tap(console.log)
    );

  }

  nuevoAlumno(alumno: IAlumno): Observable<IAlumno> {

    return this.http.post<IAlumno>(`${this.CURRENT_SERVER}/alumno`, alumno, { headers: this.headers }).pipe(
      tap(console.log)
    );

  }

  borrarAlumno(id: number): Observable<void> {

    return this.http.delete<void>(`${this.CURRENT_SERVER}/alumno/` + id.toString()).pipe(
      tap(console.log)
    );

  }

}
