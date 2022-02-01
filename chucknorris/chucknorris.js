/*fetch("https://api.chucknorris.io/jokes/random")
        .then(response => response.json())//deserializa : pasa de texto JSON a Variable JS
        .then((frasechuck) => {
            console.log("frase RECIBIDA " +frasechuck.value);
            //document.getElementById("letra").value = texto;

        })
        .catch(function (error) {
            console.error('Hubo un problema con la petición Fetch:' + error.message);
        });*/
const URL_SERVICIO_CHUCK = "https://api.chucknorris.io/jokes/random";
function obtenerFrase()
{
    console.log("Obtener frase");
    fetch(URL_SERVICIO_CHUCK)
        .then(respuesta => respuesta.json())
        .then(info_frase => {
            //extraer la frase y la imagen
            document.getElementById("frasechuck").innerHTML=info_frase.value;
            document.getElementById("imagenchuck").src = info_frase.icon_url;
            //y dibujarlas en el html
        })

}