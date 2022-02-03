import { TipoImc } from "./tipo-imc";

export class Imc {
    peso:number;
    altura:number;
    numerico:number;
    foto:string;
    nominal:TipoImc;
    lectura:string;//para que tenga el tipoIMC como string
   

    constructor(){
        this.peso=0;
        this.altura=0;
        this.numerico=0;
        this.foto = "";
        this.nominal = TipoImc.DESNUTRIDO;
        this.lectura = "";
    }

}
