const inquirer = require('inquirer');
require('colors');

const menuOpts = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear tarea'
            },
            {
                value: '2',
                name: '2. Listar tarea'
            },
            {
                value: '3',
                name: '3. Listar tarea(s) completadas'
            },
            {
                value: '4',
                name: '4. Listar tarea(s) pendientes'
            },
            {
                value: '5',
                name: '5. Completar tarea(s)'
            },
            {
                value: '6',
                name: '6. Borrar tarea(s)'
            },
            {
                value: '0',
                name: '0. Salir'
            }
        ]
    }
];

const inquirerMenu = async() =>{
    console.clear();
    console.log('============================'.green);
    console.log('   Selecciones una opción'.green);
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

module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}