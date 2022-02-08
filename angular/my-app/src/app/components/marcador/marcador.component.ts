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

}
