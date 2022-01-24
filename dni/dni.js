const SECUENCIA_LETRAS_DNI = "TRWAGMYFPDXBNJZSQVHLCKE";

function obtenerDniUsuario ()
{
    var dni_introducido;

        //"meterme en el HTML y coger lo que pone en el input del dni"
        var input_dni = document.getElementById("dni");
        dni_introducido = input_dni.value;

    return dni_introducido;
}

function obtenerLetra() {
    var letra_introducida;

        var input_letra = document.getElementById("letra");
        letra_introducida = input_letra.value;

    return letra_introducida;
}

function calcularLetraDniUsuario (numero_dni)
{
    var letra_calculada;

        //TODO: coger el número y hacer el modulo 23
        let resto = numero_dni%SECUENCIA_LETRAS_DNI.length;
        console.log("Resto = " + resto);
        //console.log ("LONGUITUD PALABRA CLAVE " +SECUENCIA_LETRAS_DNI.length);
        letra_calculada = SECUENCIA_LETRAS_DNI.charAt(resto);//
        //SECUENCIA_LETRAS_DNI[resto];//
        console.log ("Letra obtenida =  " +letra_calculada);


    return letra_calculada;
}

function informarResultado (letra_calculada,letra_control )
{
    if (letra_calculada==letra_control)
    {
        //informar correcto
        window.alert ("SU DNI ES CORRECTO");
    } else {
        //informar incorrecto
        window.alert ("SU DNI ES INCORRECTO");
    }
}
function validarDni()
{
    console.log("Ha tocado validar");
    let numero_dni = obtenerDniUsuario();
    console.log ("Numero introducido " + numero_dni);
    let letra_control = obtenerLetra();
    //TODO: pasar a mayúscula la letra de control
    letra_control = letra_control.toUpperCase();
    console.log ("Letra introducida " + letra_control);
    let letra_calculada = calcularLetraDniUsuario(numero_dni);
    informarResultado (letra_calculada, letra_control);
    /*
    obtenerDNI
    obtenerLetra
    calcularLetraDniUsuario
    si letra calculada es igual
    a letra introducida
        informo del exito
    si no
        le informo del error
    */
}