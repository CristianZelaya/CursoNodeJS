const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
console.clear();

console.log(argv);

let tabla = argv.base;
let hasta = 10;
let listar = argv.l;

console.log(tabla);

crearArchivo(tabla, hasta, listar)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))