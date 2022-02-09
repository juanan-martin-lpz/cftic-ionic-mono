import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAlumno } from '../models/ialumno';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {


  constructor(private http: HttpClient) {

  }

  obtenerAlumnos(): Observable<IAlumno[]> {

    return this.http.get<IAlumno[]>('http://10.1.2.10:8090/api/alumnos');

  }


}
