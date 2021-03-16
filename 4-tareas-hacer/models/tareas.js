const Tarea = require("./tarea");
require('colors');

class Tareas{

    _listado = {};

    constructor(){
        this._listado = {};
    }

    borrarTarea(id = ''){
        if (this._listado[id]){
            delete this._listado[id];
        }
    }

    cargarTareasFromArray(tareas = []){
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        })
    }

    //pasa a un arreglo el listado
    get listadoArr(){
        const listado = [];

        Object.keys(this._listado).forEach(key =>{
            const tarea = this._listado[key]
            listado.push(tarea);
        });

        return listado;
    }

    crearTarea(desc = ""){
        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;
    }

    listadocompleto(){
        
        console.log();

        this.listadoArr.forEach( (tarea, i) => {
            const idx = `${i + 1}. `.green;
            const { desc, completadoEn } = tarea;
            const estado = (completadoEn)
                                ? ' Completada'.green
                                : ' Pendiente'.red;

            console.log(idx + desc+ ' ::' + estado);
        });
    }

    listarTareasCompletadas ( completadas = true){

        console.log();

        this.listadoArr.forEach( (tarea) => {

            let contador = 0;
            const { desc, completadoEn } = tarea;
            const estado = (completadoEn)
                                ? ' Completada'.green
                                : ' Pendiente'.red;

            if (completadas){
                if(completadoEn){
                    contador +=1;
                    console.log((contador+'. ').green + desc + ' :: ' + completadoEn.green);
                }
            }
            else{
                if(!completadoEn){
                    contador +=1;
                    console.log((contador+'. ').green + desc + ' ::' + estado);
                }
            }

        });
    }

    toggleCompletas(ids = []){
        ids.forEach( id =>{
            const tarea = this._listado[id];

            if (!tarea.completadoEn){
                tarea.completadoEn = new Date().toISOString();
            }
        })

        this.listadoArr.forEach( tarea =>{
            if ( !ids.includes(tarea.id)){
                this._listado[tarea.id].completadoEn = null;
            }
        })
    }
}

module.exports = Tareas;