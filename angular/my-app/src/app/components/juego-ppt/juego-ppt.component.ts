import { Component, OnInit, ViewChild } from '@angular/core';
import { MarcadorComponent } from '../marcador/marcador.component';

@Component({
  selector: 'app-juego-ppt',
  templateUrl: './juego-ppt.component.html',
  styleUrls: ['./juego-ppt.component.css']
})
export class JuegoPptComponent implements OnInit {

  seleccionado?:boolean;//para controlar si el usuario eligió jugada o no
  
readonly FOTO_PIEDRA = "assets/imagenes/rock.png";
readonly FOTO_PAPEL = "assets/imagenes/paper.png";
readonly FOTO_TIJERA = "assets/imagenes/scissors.png";
//let ids_botones = ["piedra", "papel", "tijera"];
 ids_botones:Array<string>= ["piedra", "papel", "tijera"];
 img_botones :Array<string>= ["rock", "paper", "scissors"];

/*
    La tabla de decision para determinar el ganador.
    Es un array bidimensional.
    Cada fila corresponde a piedra, papel y tijera, en este orden
    Cada columna corresponde al resultado de cruzar la fila correspondiente y piedra, papel y tijera en este orden
    Para acceder se necesitan dos valores, uno para la fila y otro para la columna, correspondiendo a lo seleccionado por los jugadores A y B
    0 (cero) implica un empate
    1 (uno) implica que A gana
    -1 (menos uno) implica que B gana
*/
 //tabla_decision:number[][];
 //tabla_decision:Array<Array<number>> 
 tabla_decision:Array<Array<number>> = [
    [0, -1, 1],
    [1, 0, -1],
    [-1, 1, 0]
];

  @ViewChild (MarcadorComponent) marcador?:MarcadorComponent;


  constructor() { 
    this.seleccionado=false;
    console.log("constructor JuegoPptComponent");
   
  }

  ngOnInit(): void {
    console.log("ngOnInit JuegoPptComponent");
    
  }

  ngAfterViewInit ()
  {
    console.log("Se ha cargado la vista hija");
    //this.marcador?.ponerEmpateA10();
  }

  selectPlay(play:number) {
    console.log("Jugador selecciona su jugada");
    this.seleccionado=true;
    localStorage.setItem("selected", play.toString());

    this.decorateSelectedPlay(play);
}

 decorateSelectedPlay(play:number) {

    let piedra = document.getElementById("piedra");
    let papel = document.getElementById("papel");
    let tijera = document.getElementById("tijera");

    if (piedra!=null)
    {
      piedra.classList.remove("marcada");
    }
    if (papel)//tb se puede preguntar así si es distinto de null
    {
      papel.classList.remove("marcada");
    }
    if (tijera)
    {
      tijera.classList.remove("marcada");
    }

    let boton = document.getElementById(this.ids_botones[play]);

    if (boton)
    {
      boton.classList.add("marcada");
    }
    

}

desmarcarOpcionUsuario ()
{
  //TODO: eliminar el marcado
}

 getComputerPlay():number {
    return Math.floor(Math.random() * 3);
}



 playNow() {

  //TODO mirar si player sea algo
    let computer = this.getComputerPlay();

    let player = localStorage.getItem("selected");

    if (player)
    {
      let result = this.tabla_decision[+player][computer];

      let img_computer = document.getElementById("computerPlay");
  
      if (img_computer)
{      img_computer.setAttribute("src", `assets/imagenes/${this.img_botones[computer]}.png`);
      img_computer.setAttribute("alt", this.img_botones[computer]);}
  
      console.log(result);//MOSTRANDO EL RESULTADO
      this.marcador?.actualizarMarcador(result);
      
      //DE FORMA IMPLÍCITA
      // 1 GANA EL JUGADOR
      // 0 ES EMPATE
      // -1 GANA EL PC
      //TODO: AÑADIR UN MARCARDOR VISUAL
      //QUE SE ACTUALICE POR CADA PARTIDA
      //Y MUESTREL EL RESULTADO DEL JUEGO

      this.seleccionado=false;
  
      localStorage.removeItem("selected");
    }
    
}




}
