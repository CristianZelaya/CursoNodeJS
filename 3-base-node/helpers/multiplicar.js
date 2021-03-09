const fs = require('fs');

const crearArchivo = async (tabla = 5, hasta = 10) =>{

        try{
            console.log("==================");
            console.log(`   Tabla del ${tabla}`);
            console.log("==================");
            let salida = "";

            for (let i = 1; i <= hasta; i++){
                salida += `${tabla} x ${i} = ${tabla*i}\n`;
            }
            console.log(salida);
        
            fs.writeFileSync(`tabla-${tabla}.txt`, salida);
        
            return(`El archivo tabla-${tabla}.txt creado correctamente`);

        }
        catch(err){
            throw err;
        }

}

module.exports = {
    crearArchivo
}