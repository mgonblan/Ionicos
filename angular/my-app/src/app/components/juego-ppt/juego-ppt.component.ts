import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego-ppt',
  templateUrl: './juego-ppt.component.html',
  styleUrls: ['./juego-ppt.component.css']
})
export class JuegoPptComponent implements OnInit {


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




  constructor() { }

  ngOnInit(): void {
  }

  selectPlay(play:number) {
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
{      img_computer.setAttribute("src", `imagenes/${this.img_botones[computer]}.png`);
      img_computer.setAttribute("alt", this.img_botones[computer]);}
  
      console.log(result);//MOSTRANDO EL RESULTADO
      //DE FORMA IMPLÍCITA
      // 1 GANA EL JUGADOR
      // 0 ES EMPATE
      // -1 GANA EL PC
  
      localStorage.removeItem("selected");
    }
    
}

}
