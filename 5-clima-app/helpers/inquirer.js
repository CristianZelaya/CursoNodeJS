const inquirer = require('inquirer');
require('colors');

const menuOpts = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: 1,
                name: `${'1.'.green} Buscar Ciudad`
            },
            {
                value: 2,
                name: `${'2.'.green} Historial`
            },
            {
                value: 0,
                name: `${'0.'.green} Salir`
            }
        ]
    }
];

const inquirerMenu = async() =>{
    console.clear();
    console.log('============================'.green);
    console.log('   Selecciones una opción'.white);
    console.log('============================\n'.green);

    const {opcion} = await inquirer.prompt(menuOpts);
    return opcion;
}

const pausa = async() =>{
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'enter'.green} para continuar`
        }
    ]
    console.log('\n');
    await inquirer.prompt(question)
}

const leerInput = async(message)=>{
    const question = [
        {
            type: 'imput',
            name: 'desc',
            message,
            validate(value){
                if(value.length === 0){
                    return 'Por favor engrese un valor'
                }
                return true;
            }
        }
    ];

    const {desc} = await inquirer.prompt(question);
    return desc;
}

const listarLugares = async(lugares = []) => {

    const choices = lugares.map( (lugar, i) =>{

        const idx = `${i + 1}.`.green;

        return {
            value: lugar.id,
            name: `${ idx } ${ lugar.nombre}`
        }

    });

    choices.unshift(
        {
            value: 0,
            name: '0.'.red + ' Cancelar'
        }
    )

    const preguntas = [
        {
            type: 'list',
            name: 'lugar',
            message: 'Selecciona un Lugar',
            choices
        }
    ]

    const {lugar} = await inquirer.prompt(preguntas);

    return lugar;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listarLugares
}