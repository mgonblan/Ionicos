import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RUTA_JSON_SERVER, RUTA_SERVIDOR_CLASE } from '../config/app';
import { Alumno } from '../models/alumno';

/*esto es un servicio
que va a llevar la comunición HTTP
con el servidor*/

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {


  //ruta_servidor:string=RUTA_SERVIDOR_CLASE;
  ruta_servidor:string=RUTA_JSON_SERVER;

  constructor(private http:HttpClient) {

   }

  //crearAlumno
  //leerAlumnos
  //leerAlumno
  //modificarAlumno
  //borrarAlumno
  obtenerAlumnos():Observable<Array<Alumno>>
  {
   return this.http.get<Array<Alumno>>(this.ruta_servidor); 
   //return this.http.get<Alumno[]>("http://10.1.2.10:8090/api/alumnos"); 
  }

  obtenerAlumnosConCabeceras():Observable<HttpResponse<Array<Alumno>>>
  {
   return this.http.get<Array<Alumno>>(this.ruta_servidor, {observe: 'response'}); 
   //return this.http.get<Alumno[]>("http://10.1.2.10:8090/api/alumnos"); 
  }

  borrarAlumno (id:number):Observable<void>
  {
    return this.http.delete<void>(this.ruta_servidor+id);
  }

}
