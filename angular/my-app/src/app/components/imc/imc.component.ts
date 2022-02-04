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
        //no hay datos: la fecha última es hoy
        ultimavez = new Date().toString();
      } 
    
      //guardo el momento actual como fecha última (para la próxima)
      momentoactual=new Date().toString();
      localStorage.setItem("ultimavez",momentoactual);
      
    return ultimavez;
  }

  cargarListaImcs ():Array<Imc>
  {
    let array_guardado:Array<Imc>= new Array<Imc>();
    let string_datos:string|null="";
//TODO: ORDENAR GRÁFICAMENTE por IMC NUMÉRICO
      string_datos = localStorage.getItem('lista_imcs');
      if (string_datos!=null)
      {
        array_guardado = JSON.parse(string_datos);
      }
    return array_guardado;
  }

  ngOnInit(): void {
    console.log("iniciando");
    this.nveces = this.obtenerYActualizarNveces();
    this.ultima_vez = this.obtenerYActualizarFechaUltimaVez();
    this.array_imc = this.cargarListaImcs();
    
  }

  //TODO: usar map sobre el array original
  //para obtener un nuevo array sumando a todos 1k
  sumarUnkilo(imc_normal: Array<Imc>): Array<Imc> {
    let arrayUnkilo: Array<Imc> = new Array<Imc>();

//1ºforma
    arrayUnkilo = imc_normal.map(item => {

      let imc = this.clonarImc(item);
      imc.peso++;
      
      return imc;  
    });
//2ºforma
   /* arrayUnkilo = imc_normal.map(item => {
      
      item.peso++;
      
      return item;  
    });*/

    
    return arrayUnkilo;


  }

  ordendarPorImc()
  {
    console.log("ordenando...");
    this.array_imc.sort(
      (a:Imc, b:Imc) => {
        let resultado:number=0;
            resultado=a.numerico-b.numerico;//ASCENDENTE
            //resultado=b.numerico-a.numerico;//DESCENDENTE
       /*  if (a.numerico>b.numerico)
        {resultado=1;
        } else if (a.numerico<b.numerico)
        {
          resultado=-1
        } else {
          resultado=0;} */

        return resultado;
      }
    );
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

    //TODO: guardar el array en el localStorage
    //de modo que cuando se meta en la página
    //se cargue la tabla con la información almacenada
    let lista_imcs_json = JSON.stringify(this.array_imc);
    localStorage.setItem('lista_imcs',lista_imcs_json );
    /* console.log("lista imcs = " +lista_imcs_json);
    let array_nuevo = JSON.parse(lista_imcs_json);
    console.log("Altura 1 " + array_nuevo[0].altura); */
    let array1kgmas = this.sumarUnkilo(this.array_imc);
    console.log("ARRAY + 1KG");
    this.mostrarArray(array1kgmas);

    this.calculado=true;
  }



}
