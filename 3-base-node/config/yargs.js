require('colors');
const argv = require('yargs')
    .options('b',{
        alias: 'base',
        type: 'number',
        demandOption : true,
        describe: 'Es la base de la tabla de multiplicar'.yellow
    })
    .options(
        'l',{
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Lista la tabla creada'.yellow
        })
    .options(
        'h',{
            alias: 'hasta',
            type: 'number',
            demandOption : true,
            describe: 'Define hasta donde se hara la tabla'.yellow
        })
    .check((argv, options) =>{
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un numero'.green
        }
        return true;
    })
    .check((argv, options) =>{
        if(isNaN(argv.h)){
            throw 'El hasta tiene que ser un numero'.green
        }
        return true;
    })
    .argv;

module.exports = argv;