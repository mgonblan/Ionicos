import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
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

  ngOnInit(): void {
    //aquí es el sitio para obtener datos de fuera
    //ngOnInit
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
  }

}
