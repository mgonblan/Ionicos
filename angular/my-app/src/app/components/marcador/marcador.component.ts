import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/marcador';

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.css']
})
export class MarcadorComponent implements OnInit {

  /* marcador_jugador:number;
  marcador_maquina:number;
   */

  marcador:Marcador;

  constructor() { 
    /* this.marcador_jugador=0;
    this.marcador_maquina=0; */
    this.marcador = new Marcador();

    console.log("constructor MarcadorComponent");
    
  }
  ponerMarcadorAcero()
{
  /* this.marcador_jugador=0;
  this.marcador_maquina=0; */
  this.marcador = new Marcador();
}

  ngOnInit(): void {

    console.log("ngOnInit MarcadorComponent");
    this.leerMarcadorGuardado();

  }

  leerMarcadorGuardado ()
  {
    /* let marcador_aux_j = localStorage.getItem('puntuacion_jugador');
    let marcador_aux_m = localStorage.getItem('puntuacion_maquina');
 
    if (marcador_aux_j)
    {
      this.marcador_jugador =+marcador_aux_j;
    }

    if (marcador_aux_m)
    {
      this.marcador_maquina =+marcador_aux_m;
    } */

    let string_json_resultado = localStorage.getItem('puntuacion_jugador');
    if (string_json_resultado)
    {
      this.marcador = <Marcador>JSON.parse(string_json_resultado);
    }

  }
  

  actualizarMarcador (resultado:number)//:void
{
  if (resultado==1)
  {
    //ganao el jugador
    this.marcador.marcador_jugador= this.marcador.marcador_jugador+1;
  } else if (resultado==-1)
  {
    //ha ganao el pc
    this.marcador.marcador_maquina=this.marcador.marcador_maquina+1;
  }else {
    //son empate
    this.marcador.marcador_jugador= this.marcador.marcador_jugador+1;
    this.marcador.marcador_maquina=this.marcador.marcador_maquina+1;
  }


}

guardarMarcador ()
{
  /* localStorage.setItem('puntuacion_jugador',this.marcador_jugador.toString());
  localStorage.setItem('puntuacion_maquina',this.marcador_maquina.toString()); */
  
  let string_json_resultado = JSON.stringify(this.marcador);
  //localStorage.setItem('puntuacion_jugador',this.marcador_jugador.toString());
  localStorage.setItem('puntuacion_jugador',string_json_resultado);

}

ngOnDestroy() {
  //aprovecho que deja de verse el compoennte, para guardar el 
  //marcador
  //localStorage.setItem("saliendo", "55");

  this.guardarMarcador();
}


}
