const express = require('express');
const app = express();

app.get('/', function(request, response) {
    console.log("obtengo mi información");
    response.send("Retorno GET");
});


// puerto en el que se va a levantar
// funcion inicial
app.listen(3000, function() {
    console.log("Inicio NODE");
});