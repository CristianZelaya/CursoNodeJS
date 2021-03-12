require('colors');
const { inquirerMenu, pausa } = require('./helpers/inquirer');


const main = async() =>{
    console.log('Hola Mundo');
    let opt = '';
    do{
        opt = await inquirerMenu();
        if(opt)await pausa();

    }while(opt !=='0')
}

main();