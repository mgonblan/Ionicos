
var peticion = new XMLHttpRequest();
const URL_SERVICIO = "http://10.1.2.10:8090/api/alumnos/calcularLetraDni?dni=";

function calcularLetra() {
    //IR AL SERVIDOR A PEDIRLE LA LETRA DE UN NÚMERO
    //1 obtengo numero
    let numero = document.getElementById("dni").value;

    peticion.onreadystatechange = procesarRespuesta;
    let url_destino = URL_SERVICIO+numero;
    console.log("URL A LA QUE LLAMO = " + url_destino);
    peticion.open("GET", url_destino);
    peticion.send(null);//cuerpo vacío

}

function procesarRespuesta ()
{
    if (peticion.readyState==4)
    {
        console.log("He recibido la respuesta del servidor");
        if (peticion.status==200)
        {
            console.log("La respuesta es buena :)");
            console.log("hemos recibido = " + peticion.responseText);
            document.getElementById("letra").value = peticion.responseText;

        } else {
            console.log("La respuesta es mala :(");
            alert("La comunicación no ha sido posible");
        }
    }
}