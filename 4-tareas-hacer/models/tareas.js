const Tarea = require("./tarea");

class Tareas{

    _listado = {};

    constructor(){
        this._listado={};
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
}

module.exports = Tareas;