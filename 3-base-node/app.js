const yargs = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('yargs').argv;

console.clear();

console.log(argv);

let tabla = argv.base;
let hasta = 10;

console.log(tabla);

crearArchivo(tabla, hasta)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))