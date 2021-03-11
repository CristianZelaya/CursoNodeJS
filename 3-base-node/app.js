const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

let tabla = argv.base;
let hasta = argv.hasta;
let listar = argv.l;

crearArchivo(tabla, hasta, listar)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado correctamente'))
    .catch(err => console.log(err))