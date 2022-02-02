import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dni',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css']
})
export class DniComponent implements OnInit {

  //PROPIEDADES

  titulo:string;
  numero:number|null;//UNION TYPES "UNA VARIABLE, PUEDE SER DE DOS TIPOS A LA VEZ"
  letra:string;
  static readonly SECUENCIA_LETRAS_DNI = "TRWAGMYFPDXBNJZSQVHLCKE";

  //FUNCIONES O MÉTODOS
  constructor() {
    this.titulo = "CALCULE SU LETRA DEL DNI";
    this.numero =null;
    this.letra="";
    console.log("en el constructor de DniComponent");
  }

  ngOnInit ()
  {
    //this.titulo = "HALA MADRID";
    console.log("en el ngOnInit de DniComponent");
  }

  calcularLetraDni()
  {
    console.log("ha tocado el boton " +this.numero);
    if (this.numero !=null){
      let resto = this.numero%DniComponent.SECUENCIA_LETRAS_DNI.length;
        console.log("Resto = " + resto);
       
        this.letra = DniComponent.SECUENCIA_LETRAS_DNI.charAt(resto);
        console.log("Letra = " + this.letra);
       
    }
  }

}
