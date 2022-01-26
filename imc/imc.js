let lista_resultados;

function inicilizar ()
{
    lista_resultados =  new Array();// creo un array vacío
    console.log("Página cargada ");
}
this.onload = inicilizar;

class Imc {
    //peso, altura
    //FUNCIÓN/MÉTODO-> mecaniso previsto para crear objetos(variables de una clase)
    //MÉTODO (Forma parte del API estándar dada por JS - Bernardo -) vs Función (hecha por ti)
    constructor (peso, altura){
        //this en el ámbito del constructor representa el objeto de nueva creación - en ciernes-
        this.peso = peso;
        this.letra = letra;
    }
}

function obtenerPeso ()
{
    let peso;
    
        peso = document.getElementById("peso").value;

    return peso;
}

function obtenerAltura ()
{
    let altura;
    
        altura = document.getElementById("altura").value;

    return altura;
    
}

function calcularvalorIMC (altura, peso)
{
    let imc;

        imc = peso / (altura*altura);
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
function mostrarIMC (imc_calculado)
{
    
    let leyenda = document.getElementById("leyenda");
    let imagen = document.getElementById("imagen_imc");
    let valor_nominal;

    if (imc_calculado<16)
    {
        valor_nominal = "Desnutrido";
        imagen.src = "imagenes/desnutrido.jpg";
    } else if ((imc_calculado>=16)&&(imc_calculado<18))
    {
        valor_nominal = "Delgado";
        imagen.src = "imagenes/delgado.jpg";

    }else if ((imc_calculado>=18)&&(imc_calculado<25))
    {
        valor_nominal = "Ideal";
        imagen.src = "imagenes/ideal.png";

    }else if ((imc_calculado>=25)&&(imc_calculado<31))
    {
        valor_nominal = "Sobrepeso";
        imagen.src = "imagenes/sobrepeso.jpg";

    }else if ((imc_calculado>=31))
    {
        valor_nominal = "Obeso";
        imagen.src = "imagenes/obeso.gif";
    }

    leyenda.innerHTML = "Su IMC es " + imc_calculado +" está en el rango " + valor_nominal;

}

function mostrarHistoricoImc (imc_usuario)
{
    //CREAR UN ELEMENTO /DIV /P /LI
    let caja_nueva = document.createElement("div");
    caja_nueva.innerHTML = imc_usuario;
    //AÑADIRLO AL DIV "PADRE" /PUNTO DE ANCLAJE / HOOK
    let div_padre = document.getElementById("lista_imcs");
    div_padre.appendChild(caja_nueva);
}


function calcularIMC ()
{
    console.log("Ha tocado calcular");
    let peso_usuario = obtenerPeso();
    let altura_usuario = obtenerAltura();
    let imc_usuario = calcularvalorIMC (altura_usuario, peso_usuario);
    console.log("IMC = " + imc_usuario);
    mostrarIMC(imc_usuario);
    mostrarHistoricoImc (imc_usuario);
    lista_resultados.push(imc_usuario);

    //obtenerpeso
    //obteneraltura
    //calcularvalorIMC
    //mostrar
}

function limpiarTodo(){
   location.reload();

}


function limpiarTodoAnA(){
    //let p_num = document.getElementById('p-num-result');
    //let p_char = document.getElementById('p-char-result');
    let img_element =document.getElementById('imagen_imc');
    //let listResult = document.getElementById('list-result');
    let div_padre = document.getElementById("lista_imcs");

    //p_num.innerHTML ='';
    //p_char.innerHTML ='';
    img_element.src ='';
    div_padre.innerHTML='';

}