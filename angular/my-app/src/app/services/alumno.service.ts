import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno';

/*esto es un servicio
que va a llevar la comunición HTTP
con el servidor*/

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http:HttpClient) {

   }

  //crearAlumno
  //leerAlumnos
  //leerAlumno
  //modificarAlumno
  //borrarAlumno
  obtenerAlumnos():Observable<Array<Alumno>>
  {
   return this.http.get<Array<Alumno>>("http://10.1.2.10:8085/"); 
   //return this.http.get<Alumno[]>("http://10.1.2.10:8090/api/alumnos"); 
  }

  obtenerAlumnosConCabeceras():Observable<HttpResponse<Array<Alumno>>>
  {
   return this.http.get<Array<Alumno>>("http://10.1.2.10:8085/", {observe: 'response'}); 
   //return this.http.get<Alumno[]>("http://10.1.2.10:8090/api/alumnos"); 
  }

  borrarAlumno (id:number):Observable<void>
  {
    return this.http.delete<void>("http://10.1.2.10:8085/"+id);
  }

}
