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
 
  oimc:Imc;
  calculado:boolean;
  array_imc:Array<Imc>;
  ultima_vez:string;
  nveces:number;
  

  constructor() {
    this.titulo = "CÁLCULO DEL IMC";
    this.label_nombre="Nombre";
    this.label_peso="Peso";
    this.label_altura="Altura";
    this.oimc = new Imc();
    this.nveces=0;
    this.calculado=false;
    this.array_imc=new Array<Imc>();
    this.ultima_vez = new Date().toString();
   
  }

  obtenerYActualizarNveces () : number
  {
    let nveces:number=0;
    //localStorage.setItem("usuario", "vale");
    let sveces:string|null= localStorage.getItem("nveces");
    if (sveces!=null)
    {
      //hay datos
        nveces =+ sveces;
        nveces++; 
    }
    localStorage.setItem("nveces", nveces+"");
    console.log(`Ha entrado ${nveces} veces`);
    return nveces;
  }

  obtenerYActualizarFechaUltimaVez () : string
  {
    let ultimavez:string|null="";
    let momentoactual:string="";
      //localStorage.setItem("usuario", "vale");
      ultimavez= localStorage.getItem("ultimavez");
      if (ultimavez==null)
      {
        //no hay datos
        ultimavez = new Date().toString();
      } 
    
      momentoactual=new Date().toString();
      localStorage.setItem("ultimavez",momentoactual);
      //console.log(`Ha entrado ${nveces} veces`);
    return ultimavez;
  }
  ngOnInit(): void {
    console.log("iniciando");
    this.nveces = this.obtenerYActualizarNveces();
    this.ultima_vez = this.obtenerYActualizarFechaUltimaVez();
  }

clonarImc (imc_viejo:Imc):Imc
 {
   let imc_nuevo:Imc=new Imc();

      imc_nuevo.altura = imc_viejo.altura;
      imc_nuevo.peso = imc_viejo.peso;
      imc_nuevo.numerico = imc_viejo.numerico;
      imc_nuevo.foto = imc_viejo.foto;
      imc_nuevo.nominal = imc_viejo.nominal;
      imc_nuevo.lectura = imc_viejo.lectura;

   return imc_nuevo;
  } 


  mostrarArray (array:Array<Imc>):void
  {
    array.forEach(itemimc => {
      console.log(`${itemimc.peso} ${itemimc.altura} ${itemimc.lectura}`);
    });
  }

  calculateIMC(){
    //this.imc_numerico = this.peso/(this.altura*this.altura);
    this.oimc.numerico = this.oimc.peso/(this.oimc.altura*this.oimc.altura); 
    this.oimc.numerico =+ this.oimc.numerico.toFixed(2);

    if (this.oimc.numerico<16)
    {
      this.oimc.nominal=TipoImc.DESNUTRIDO;
      this.oimc.foto="assets/desnutrido.jpg";
      this.oimc.lectura=TipoImc[TipoImc.DESNUTRIDO];
    } else if (this.oimc.numerico>=16 && this.oimc.numerico<18 )
    {
      this.oimc.nominal=TipoImc.DELGADO;
      this.oimc.foto="assets/delgado.jpg";
      this.oimc.lectura=TipoImc[TipoImc.DELGADO];
    }else if (this.oimc.numerico>=18 && this.oimc.numerico<25 )
    {
      this.oimc.nominal=TipoImc.IDEAL;
      this.oimc.foto="assets/ideal.jpg";
      this.oimc.lectura=TipoImc[TipoImc.IDEAL];
    }else if (this.oimc.numerico>=25 && this.oimc.numerico<31 )
    {
      this.oimc.nominal=TipoImc.SOBREPESO;
      this.oimc.foto="assets/sobrepeso.jpg";
      this.oimc.lectura=TipoImc[TipoImc.SOBREPESO];
    }else if (this.oimc.numerico>31 )
    {
      this.oimc.nominal=TipoImc.OBESO;
      this.oimc.foto="assets/obeso.jpg";
      this.oimc.lectura=TipoImc[TipoImc.OBESO];
    }


    //crear un imc nuevo con los valores del oimc
    let imc_nuevo:Imc = this.clonarImc(this.oimc);
    this.array_imc.push(imc_nuevo);
    this.mostrarArray(this.array_imc);

    this.calculado=true;
  }



}
