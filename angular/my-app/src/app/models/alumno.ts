export class Alumno {

    id: number;
    nombre: string;
    apellido: string;
    email: string;
    edad: number;
    creadoEn: string;
    fotoHashCode?: number;

    constructor ()
    {
        this.id=0;
        this.nombre='';
        this.apellido='';
        this.edad=0;
        this.email='';
        this.creadoEn='';

    }

}
