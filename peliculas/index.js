
const res = require('express/lib/response');
let peliculas = [];

var express = require('express');
var app = express();
var PORT = 3000;
  
app.use(express.json());
    

app.get('/peliculas', function(request, response) {
    console.log("Obtengo todas las peliculas");
    response.status(200);
    response.json(peliculas);
});

app.use(express.json());
app.post('/pelicula', function(request, response) {

    const nombre    = request.body.nombre;
    const anio      = request.body.anio;
    const id        = request.body.id;
    const pelicula = {nombre: nombre, anio: anio, id: id};
    
    peliculas.push(pelicula);
    
    response.status(201);
    response.json(pelicula);
});

//request.query(param) >> doc de express



// puerto en el que se va a levantar
// funcion inicial
app.listen(PORT, function() {
    console.log("Inicio  en puerto: " + PORT);
});