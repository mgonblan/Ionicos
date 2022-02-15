import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { RUTA_JSON_SERVER, RUTA_SERVIDOR_CLASE } from '../config/app';
import { Alumno } from '../models/alumno';

/*esto es un servicio
que va a llevar la comunición HTTP
con el servidor*/

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {


  ruta_servidor:string=RUTA_SERVIDOR_CLASE;
  //ruta_servidor:string=RUTA_JSON_SERVER;

  constructor(private http:HttpClient) {

   }
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
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
  addAlumno(alumno?: Alumno):Observable<Alumno>
  {
    return this.http.post<Alumno>(this.ruta_servidor, alumno, this.httpOptions).pipe(
      tap((newAlumno: Alumno) => this.log(`added hero w/ id=${newAlumno.id}`)),
      catchError(this.handleError<Alumno>('addAlumno'))
    );
  }
  log(arg0: string): void {
    console.log(`AlumnoService: ${arg0}`);
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
