// Ejercicio redis implementar cache hit/miss

const axios = require('axios');
const Pipeline = require('pipes-and-filters');
const pipeline = Pipeline.create('validación teléfono');


let validar_numero = function(input, next){
    let config = {
        headers: {
            apikey: API_KEY,
        }
    }
    axios.get(`https://api.apilayer.com/number_verification/validate?number=${input}`, config)
    .then(function (response) {
        if(!response.data.valid){
            return next(Error('Número no válido')); 
        }
        // handle success
        next(null, input); 
    })
};