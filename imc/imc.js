let lista_resultados;
let masalto;

//id construyendo un array de objetos IMC (no solo el número)
//usad ese array para mostrarHistoricoImc
//añadir a esa lista el valor nominal y la imagen
//permitir ordenar esa lista por el valor nominal y por el numérico




function inicilizar() {
    lista_resultados = new Array();// creo un array vacío
    masalto = 0;
    console.log("Página cargada ");
    document.getElementById ("peso").value = 5;
}
this.onload = inicilizar;

class Imc {
    //peso, altura
    //FUNCIÓN/MÉTODO-> mecaniso previsto para crear objetos(variables de una clase)
    //MÉTODO (Forma parte del API estándar dada por JS - Bernardo -) vs Función (hecha por ti)
    constructor(peso, altura) {
        //this en el ámbito del constructor representa el objeto de nueva creación - en ciernes-
        this.peso = peso;
        this.altura = altura;
        this.imc_numerico = this.calcularValor();
        this.imc_nominal = this.obtenerIMCNominal(this.imc_numerico);
        this.imagen = "imagenes/" + this.imc_nominal + ".jpg";

    }


    obtenerIMCNominal(imc_calculado) {

        let valor_nominal;

        if (imc_calculado < 16) {
            valor_nominal = "desnutrido";
        } else if ((imc_calculado >= 16) && (imc_calculado < 18)) {
            valor_nominal = "delgado";

        } else if ((imc_calculado >= 18) && (imc_calculado < 25)) {
            valor_nominal = "ideal";

        } else if ((imc_calculado >= 25) && (imc_calculado < 31)) {
            valor_nominal = "sobrepeso";
        } else if ((imc_calculado >= 31)) {
            valor_nominal = "obeso";
        }

        return valor_nominal;

    }
    calcularValor() {
        let imc;

        imc = this.peso / (this.altura * this.altura);
        imc = parseFloat(imc.toFixed(2));

        return imc;
    }

    mostrarPorConsola() {

    }
}

function obtenerPeso() {
    let peso;

    peso = document.getElementById("peso").value;

    return peso;
}

function obtenerAltura() {
    let altura;

    altura = document.getElementById("altura").value;

    return altura;

}

function calcularvalorIMC(altura, peso) {
    let imc;

    imc = peso / (altura * altura);
    imc = imc.toFixed(2);//redondeo a dos decimales

    return imc;
}
/**
 * entradas: imc_calculado
 * 
 * salidas: no hay - solo muestra -
 * 
 * descricpion : 
 * esta función, informa al usuario por pantalla
 * de su valor IMC
 * 
 * precondiciones: el valor imc_calculado es un entero positivo
 * 
 * postcondiciones: se ha informado al usuario
 */
function mostrarIMC(imc_calculado) {

    let leyenda = document.getElementById("leyenda");
    let imagen = document.getElementById("imagen_imc");
    let valor_nominal;

    if (imc_calculado < 16) {
        valor_nominal = "Desnutrido";
        imagen.src = "imagenes/desnutrido.jpg";
    } else if ((imc_calculado >= 16) && (imc_calculado < 18)) {
        valor_nominal = "Delgado";
        imagen.src = "imagenes/delgado.jpg";

    } else if ((imc_calculado >= 18) && (imc_calculado < 25)) {
        valor_nominal = "Ideal";
        imagen.src = "imagenes/ideal.jpg";

    } else if ((imc_calculado >= 25) && (imc_calculado < 31)) {
        valor_nominal = "Sobrepeso";
        imagen.src = "imagenes/sobrepeso.jpg";

    } else if ((imc_calculado >= 31)) {
        valor_nominal = "Obeso";
        imagen.src = "imagenes/obeso.jpg";
    }

    leyenda.innerHTML = "Su IMC es " + imc_calculado + " está en el rango " + valor_nominal;

}



function mostrarHistoricoImc(imc_usuario) {
    //CREAR UN ELEMENTO /DIV /P /LI
    let caja_nueva = document.createElement("div");
    caja_nueva.innerHTML = imc_usuario;
    //AÑADIRLO AL DIV "PADRE" /PUNTO DE ANCLAJE / HOOK
    let div_padre = document.getElementById("lista_imcs");
    div_padre.appendChild(caja_nueva);
}

function crearFila(objeto_imc) {
    let fila;
    let columna_imc_numerico;
    let columna_imc_nominal;
    let columna_img;
    let elemento_img;

    fila = document.createElement("tr");
    columna_imc_numerico = document.createElement("td");
    columna_imc_nominal = document.createElement("td");
    columna_img = document.createElement("td");
    elemento_img = document.createElement("img");

    columna_imc_numerico.innerHTML = objeto_imc.imc_numerico;
    columna_imc_nominal.innerHTML = objeto_imc.imc_nominal;

    elemento_img.src = objeto_imc.imagen;
    columna_img.appendChild(elemento_img);

    fila.appendChild(columna_imc_numerico);
    fila.appendChild(columna_imc_nominal);
    fila.appendChild(columna_img);

    return fila;
}

function obtenerMedia(lista_imcs) {
    let media = 0;
    let suma = 0;

    for (let indice = 0; indice < lista_imcs.length; indice++) {
        suma = suma + lista_imcs[indice].imc_numerico;
    }

    media = suma / lista_imcs.length;

    return media;
}

function obtenerObesos(lista_imcs) {
    let lista_obesos = new Array();

    for (let indice = 0; indice < lista_imcs.length; indice++) {
        //si el imc_numerico del imc en curso es Obeso
        if (lista_imcs[indice].imc_numerico >= 31) {
            lista_obesos.push(lista_imcs[indice]); //lo añado a la lista
        }
    }
    return lista_obesos;
}

function obtenerObesos2(lista_imcs) {
    let lista_obesos = new Array();

    //const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
    //const result = words.filter(word => word.length > 6);
    lista_obesos = lista_imcs.filter(imc => imc.imc_numerico >= 31);


    return lista_obesos;
}



function obtenerMedia2(lista_imcs) {
    let media = 0;
    let suma = 0;

    //funciones anónimas / funciones de flecha / arrow functions - programación funcional - parámetros son funciones
    lista_imcs.forEach(imc => {
        suma += imc.imc_numerico;
    });
    media = suma / lista_imcs.length;

    return media;
}

function calcularIMC() {
    console.log("Ha tocado calcular");
    let peso_usuario = obtenerPeso();
    let altura_usuario = obtenerAltura();
    //LORENA STYLE :
    if (altura_usuario > masalto) {
        masalto = altura_usuario;
    }
    console.log("masalto = " + masalto);

    //1 creo un objeto imc
    let objeto_imc = new Imc(peso_usuario, altura_usuario);
    //2 añado a la lista
    lista_resultados.push(objeto_imc);
    let media = obtenerMedia(lista_resultados);
    let media2 = obtenerMedia2(lista_resultados);
    console.log("MEDIA 1forma = " + media);
    console.log("MEDIA  2forma = " + media2);
    let lista_obesos = obtenerObesos(lista_resultados);
    let lista_obesos2 = obtenerObesos2(lista_resultados);
    console.log("Lista OBESOS FORMA 1 = ");
    lista_obesos.forEach(imc => { console.log(imc.imc_numerico + " " + imc.imc_nominal); })
    console.log("Lista OBESOS FORMA 2 = ");
    lista_obesos2.forEach(imc => { console.log(imc.imc_numerico + " " + imc.imc_nominal); })



    let fila_nueva = crearFila(objeto_imc);
    let tabla_resultados = document.getElementById("tabla_imcs");
    tabla_resultados.appendChild(fila_nueva);

    mostrarIMC(objeto_imc.imc_numerico);
    //TODO: ORDENAR POR IMC NUMÉRICO Y MOSTRARLO
    //MOSTRAR en el HTML EL MÁS ALTO Y LA MEDIA



    //CÁLCULO SIN CLASE
    /*let imc_usuario = calcularvalorIMC (altura_usuario, peso_usuario);
    console.log("IMC = " + imc_usuario);
    mostrarIMC(imc_usuario);
    mostrarHistoricoImc (imc_usuario);
    lista_resultados.push(imc_usuario);*/



    //let imc_usuario_clase = objeto_imc.calcularValor();

    //obtenerpeso
    //obteneraltura
    //calcularvalorIMC
    //mostrar
}

function limpiarTodo() {
    location.reload();

}

function ordenarPorImcNumerico(imc1, imc2) {
    let resultado;

    /*if (imc1.imc_numerico > imc2.imc_numerico) {
        resultado = 1;
    } else if (imc1.imc_numerico < imc2.imc_numerico) {
        resultado = -1;
    } else {
        resultado = 0;
    }*/
        //resultado = imc1.imc_numerico -imc2.imc_numerico;//de menor a mayor
        resultado = imc2.imc_numerico -imc1.imc_numerico;//de mayor a menor
/*
IMC num = 15.62
imc.js:305 IMC num = 27.34
imc.js:305 IMC num = 31.25
*/
/*IMC num = 31.25
imc.js:310 IMC num = 27.34
imc.js:310 IMC num = 15.62*/

    return resultado;

}

function mostrarListaOrdenada (lista_imcs)
{
    let tabla_resultados = document.getElementById("tabla_imcs");
    tabla_resultados.innerHTML=""; //borrando todas las filas
    lista_imcs.forEach (
        objeto_imc => 
        {
            let fila_nueva = crearFila(objeto_imc);
            tabla_resultados.appendChild(fila_nueva);
        }
    );
}

function ordenar() {
    console.log("Ha tocao ordenar");
    //Ordenar la lista
    lista_resultados.sort(ordenarPorImcNumerico);
    //Operador plantilla
    lista_resultados.forEach(imc => console.log(`IMC num = ${imc.imc_numerico}`));
    //Mostrar la lista ordenada
    mostrarListaOrdenada (lista_resultados);
}



function limpiarTodoAnA() {
    //lista_resultados.sort (ordenarPorImcNumerico);
    //lista_resultados.forEach( n => console.log(`IMC NUM = ${n.imc_numerico}`));
    //let p_num = document.getElementById('p-num-result');
    //let p_char = document.getElementById('p-char-result');
    let img_element = document.getElementById('imagen_imc');
    //let listResult = document.getElementById('list-result');
    let div_padre = document.getElementById("lista_imcs");

    //p_num.innerHTML ='';
    //p_char.innerHTML ='';
    img_element.src = '';
    div_padre.innerHTML = '';

}