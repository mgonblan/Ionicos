fetch("https://api.chucknorris.io/jokes/random")
        .then(response => response.json())//deserializa : pasa de texto JSON a Variable JS
        .then((frasechuck) => {
            console.log("frase RECIBIDA " +frasechuck.value);
            //document.getElementById("letra").value = texto;

        })
        .catch(function (error) {
            console.error('Hubo un problema con la petición Fetch:' + error.message);
        });