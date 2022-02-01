
var peticion = new XMLHttpRequest();//AJAX
const URL_SERVICIO = "http://10.1.2.10:8090/api/alumnos/calcularLetraDni?dni=";


//CON FETCH CON PROMESAS
function calcularLetraFetch() {
    let numero = document.getElementById("dni").value;
    let url_destino = URL_SERVICIO + numero + "&nombre=PEPE";
    fetch(url_destino)
        .then(response => response.text())
        .then((texto) => {
            console.log("LETRA RECIBIDA " +texto);
            document.getElementById("letra").value = texto;

        })
        .catch(function (error) {
            console.error('Hubo un problema con la petición Fetch:' + error.message);
        });
}


function calcularLetraAjax() {
    //IR AL SERVIDOR A PEDIRLE LA LETRA DE UN NÚMERO
    //1 obtengo numero
    let numero = document.getElementById("dni").value;

    peticion.onreadystatechange = procesarRespuesta;
    let url_destino = URL_SERVICIO + numero + "&nombre=PEPE";
    console.log("URL A LA QUE LLAMO = " + url_destino);
    peticion.open("GET", url_destino);
    peticion.send(null);//cuerpo vacío

}

function procesarRespuesta() {
    if (peticion.readyState == 4) {
        console.log("He recibido la respuesta del servidor");
        if (peticion.status == 200) {
            console.log("La respuesta es buena :)");
            console.log("hemos recibido = " + peticion.responseText);
            document.getElementById("letra").value = peticion.responseText;
            console.log("TIPO MIME " + peticion.responseType); //tipoMIME

        } else {
            console.log("La respuesta es mala :(");
            alert("La comunicación no ha sido posible");
        }
    }
}