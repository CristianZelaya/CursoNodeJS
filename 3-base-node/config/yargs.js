const argv = require('yargs')
    .options('b',{
        alias: 'base',
        type: 'number',
        demandOption : true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .options(
        'l',{
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Lista la tabla creada'
        }
    )
    .check((argv, options) =>{
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un numero'
        }
        return true;
    })
    .argv;

module.exports = argv;