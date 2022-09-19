const axios = require('axios');
const Pipeline = require('pipes-and-filters');
const pipeline = Pipeline.create('validación teléfono');

const fs = require('fs');
if(!fs.existsSync('telefonos.json')) {
    let telefonos = [];
    fs.writeFileSync('telefonos.json', JSON.stringify(telefonos));
}
let rawdata = fs.readFileSync('telefonos.json');
telefonos = JSON.parse(rawdata);

let validar_digitos = function(input, next) {
    const pattern = /^(?:[+\d].*\d|\d)$/
    if (!pattern.test(input)) {
        return next(Error('Formato no valido'));
    }
    next(null, input);
};


//pipeline
const input = 
pipeline