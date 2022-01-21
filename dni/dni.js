function obtenerDniUsuario ()
{
    var dni_introducido;

        //"meterme en el HTML y coger lo que pone en el input del dni"
        var input_dni = document.getElementById("dni");
        dni_introducido = input_dni.value;

    return dni_introducido;
}
function validarDni()
{
    console.log("Ha tocado validar");
    let numero_dni = obtenerDniUsuario();
    console.log ("Numero introducido " + numero_dni);
    /*
     obtenerDniUsuario
    obtenerLetra
    calcularLetraDniUsuario
    si letra calculada es igual
    a letra introducida
        informo del exito
    si no
        le informo del error
    */
}