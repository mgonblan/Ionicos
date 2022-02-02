import { Component, OnInit } from '@angular/core';
import { Imc } from './imc';
import { TipoImc } from './tipo-imc';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent implements OnInit {

  //PROPIEDADES
  titulo:string;
  label_nombre:string;
  label_peso:string;
  label_altura:string;
  //nombre:string;
  /* peso:number;
  altura:number;
  imc_numerico:number; */
  oimc:Imc;
  calculado:boolean;
  array_imc:Array<Imc>;

  constructor() {
    this.titulo = "CÁLCULO DEL IMC";
    this.label_nombre="Nombre";
    this.label_peso="Peso";
    this.label_altura="Altura";
    this.oimc = new Imc();
    //this.nombre="";
    /* this.peso=0;
    this.altura=0;
    this.imc_numerico = 0; */
    this.calculado=false;
    this.array_imc=new Array<Imc>();
    //TODO: tengo que ir llenando este array con los resultados

  }

  ngOnInit(): void {
  }

  calculateIMC(){
    //this.imc_numerico = this.peso/(this.altura*this.altura);
    this.oimc.numerico = this.oimc.peso/(this.oimc.altura*this.oimc.altura);
    
    if (this.oimc.numerico<16)
    {
      this.oimc.nominal=TipoImc.DESNUTRIDO;
      this.oimc.foto="assets/desnutrido.jpg";
    } else if (this.oimc.numerico>=16 && this.oimc.numerico<18 )
    {
      this.oimc.nominal=TipoImc.DELGADO;
      this.oimc.foto="assets/delgado.jpg";
    }else if (this.oimc.numerico>=18 && this.oimc.numerico<25 )
    {
      this.oimc.nominal=TipoImc.IDEAL;
      this.oimc.foto="assets/ideal.jpg";
    }else if (this.oimc.numerico>=25 && this.oimc.numerico<31 )
    {
      this.oimc.nominal=TipoImc.SOBREPESO;
      this.oimc.foto="assets/sobrepeso.jpg";
    }else if (this.oimc.numerico>31 )
    {
      this.oimc.nominal=TipoImc.OBESO;
      this.oimc.foto="assets/obeso.jpg";
    }

    this.calculado=true;
  }


}
