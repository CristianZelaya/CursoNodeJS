const fs = require('fs');

const crearArchivo = async (tabla = 5, hasta = 10, listar = false) =>{

        try{
            
            let salida = "";

            for (let i = 1; i <= hasta; i++){
                salida += `${tabla} x ${i} = ${tabla*i}\n`;
            }

            if (listar){
                console.log("==================");
                console.log(`   Tabla del ${tabla}`);
                console.log("==================");
                console.log(salida);
            }
            
        
            fs.writeFileSync(`./salida/tabla-${tabla}.txt`, salida);
        
            return(`El archivo tabla-${tabla}.txt`);

        }
        catch(err){
            throw err;
        }

}

module.exports = {
    crearArchivo
}