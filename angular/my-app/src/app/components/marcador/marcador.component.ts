import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.css']
})
export class MarcadorComponent implements OnInit {

  marcador_jugador:number;
  marcador_maquina:number;
  constructor() { 
    this.marcador_jugador=0;
    this.marcador_maquina=0;

    console.log("constructor MarcadorComponent");
    
  }
  ponerMarcadorAcero()
{
  this.marcador_jugador=0;
  this.marcador_maquina=0;
}

  ngOnInit(): void {

    console.log("ngOnInit MarcadorComponent");
    this.leerMarcadorGuardado();

  }

  leerMarcadorGuardado ()
  {
    let marcador_aux_j = localStorage.getItem('puntuacion_jugador');
    let marcador_aux_m = localStorage.getItem('puntuacion_maquina');
 
    if (marcador_aux_j)
    {
      this.marcador_jugador =+marcador_aux_j;
    }

    if (marcador_aux_m)
    {
      this.marcador_maquina =+marcador_aux_m;
    }

  }
  

  actualizarMarcador (resultado:number)//:void
{
  if (resultado==1)
  {
    //ganao el jugador
    this.marcador_jugador= this.marcador_jugador+1;
  } else if (resultado==-1)
  {
    //ha ganao el pc
    this.marcador_maquina=this.marcador_maquina+1;
  }else {
    //son empate
    this.marcador_jugador= this.marcador_jugador+1;
    this.marcador_maquina=this.marcador_maquina+1;
  }


}

guardarMarcador ()
{
  localStorage.setItem('puntuacion_jugador',this.marcador_jugador.toString());
  localStorage.setItem('puntuacion_maquina',this.marcador_maquina.toString());
}

ngOnDestroy() {
  //aprovecho que deja de verse el compoennte, para guardar el 
  //marcador
  //localStorage.setItem("saliendo", "55");

  this.guardarMarcador();
}


}
