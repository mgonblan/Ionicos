import { HttpEventType, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css'],
})
export class AlumnoComponent implements OnInit {
//esta clase usa el AlumnoService
//para obtener datos

//INYECCIÓN de dependencias

  lista_alumnos:Array<Alumno>;
  constructor(public servicio_alumnos:AlumnoService) { 
    this.lista_alumnos= new Array<Alumno>();
  }

  mostrarError (error:any):void
  {
    console.error('Ha ocurrido un error: (' + error.status + ') - ' + error.message);
  }

  mostrarCabeceras (http_response:HttpResponse<Array<Alumno>>)
  {
    console.log(`ESTATUS ${http_response.status} ${ http_response.statusText}`);
    console.log(`TIPO ${http_response.headers.get('content-type')}`);
    
  }
  add(name: string,surname: string, edad: number, email:string): void {
    name = name.trim();
    if (!name) { return; }
    this.servicio_alumnos.addAlumno({nombre:name, apellido:surname, edad, email} as Alumno)
      .subscribe(alumno => {
        this.lista_alumnos.push(alumno);
      });
      
  }
  deleteUsuario(alumno:Alumno){
    console.log("borrar usuario " + alumno.id);
    //TODO: borrar al ALUMNO del servidor
    this.servicio_alumnos.borrarAlumno(alumno.id).subscribe(
      //"observador"--el objeto que reciba la llamada 
      //cuando la respuesta esté lista
      {
        complete: () => {console.log("ha terminado");},
        error: (error_r) => {this.mostrarError(error_r);},
        //error: (error_r) => {console.error('FALLLO ' +error_r);},
        next: () =>
        {
          //1 recargar la página
          //2 eliminar del array local el usuario borrado
          this.lista_alumnos = this.lista_alumnos.filter(al=> al.id!=alumno.id);
          console.log("alumno borrado");
        }
      }
    );
  }

  ngOnInit(): void {
    //aquí es el sitio para obtener datos de fuera
    this.servicio_alumnos.obtenerAlumnos().subscribe(
      //"observador"--el objeto que reciba la llamada 
      //cuando la respuesta esté lista
      {
        complete: () => {console.log("ha terminado");},
        error: (error_r) => {this.mostrarError(error_r);},
        //error: (error_r) => {console.error('FALLLO ' +error_r);},
        next: (listado_alumnos_rx) =>
        {
          this.lista_alumnos = listado_alumnos_rx;
          this.lista_alumnos.forEach (alumno => {console.log(`Alumno ${alumno.id} ${alumno.nombre} `)});
        }
      }
    );
    this.servicio_alumnos.obtenerAlumnosConCabeceras().subscribe(
      //"observador"--el objeto que reciba la llamada 
      //cuando la respuesta esté lista
      {
        complete: () => {console.log("ha terminado");},
        error: (error_r) => {this.mostrarError(error_r);},
        //error: (error_r) => {console.error('FALLLO ' +error_r);},
        next: (http_rx) =>
        {
          this.mostrarCabeceras(http_rx);
          this.lista_alumnos = <Array<Alumno>>http_rx.body;//CASTING Body genérico a un Array de Alumnos
          this.lista_alumnos.forEach (alumno => {console.log(`Alumno ${alumno.id} ${alumno.nombre} `)});
        }
      }
    );
  }

}
