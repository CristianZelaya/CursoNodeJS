const {leerInput, inquirerMenu, pausa, listarLugares} = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

const main = async ()=>{

    const busquedas = new Busquedas();
    let opt = '';

    
    do{

        opt = await inquirerMenu();

        switch(opt){

            case 1:

                // Mostrar mensaje
                const termino = await leerInput('Ciudad: ');
                
                //Buscar lugar
                const lugares = await busquedas.ciudad(termino);

                //seleccionar lugar
                const id = await listarLugares(lugares);
                if (id === 0) continue;                
                const lugarSel = lugares.find( l => l.id === id);
                
                //Guardad en DB
                busquedas.agregarHistorial(lugarSel.nombre);
                
                //Clima
                const clima = await busquedas.climaLugar(lugarSel.lat, lugarSel.lng);

                //Mostrar Mensajes
                console.clear();
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad:', lugarSel.nombre);
                console.log('Lat:', lugarSel.lat);
                console.log('Lng:', lugarSel.lng);
                console.log('Temperatura:', clima.temp);
                console.log('Mínima:', clima.min);
                console.log('Máxima:', clima.max);
                console.log('Como esta el clima:', clima.desc);
            break;

            case 2:
                busquedas.mostrarHistorial();
            break;
            
        }
        
        if (opt !== 0) await pausa();

    } while ( opt !== 0)
}

main();