const {crearArchivo} = require('./helpers/multiplicar')

console.clear();

let tabla = 3;
let hasta = 10;

crearArchivo(tabla, hasta)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))