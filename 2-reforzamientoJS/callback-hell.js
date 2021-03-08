const empleados = [
    {
        id: 1,
        nombre: 'Cristian',
        apellido: 'Zelaya'
    },
    {
        id: 2,
        nombre: 'Fany',
        apellido: 'Gómez'
    },
    {
        id: 3,
        nombre: 'Nathy',
        apellido: 'Gutierrez'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000,
    },
    {
        id: 2,
        salario: 1200,
    }
];

//devuelve un empleado por id
const getEmpleadoByID = (id, callback) =>{
    const empleado = empleados.find(e => e.id ===id)?.nombre;

    if(empleado){
        callback(null, empleado);
    }
    else{
        callback(`El empleado con ${id} no existe`);
    }
}

const getsalarioByID = (id, callback) =>{
    const salario = salarios.find(s => s.id ===id)?.salario;

    if(salario){
        callback(null, salario);
    }
    else{
        callback(`El empleado con id ${id} no tiene salario`);
    }
}

const id = 3;

getEmpleadoByID(id, (err, empleado) =>{

    if(err){
        console.log('ERROR')
        return console.log(err);
    }

    getsalarioByID(id, (err, salario) =>{

        if(err){
            console.log('ERROR')
            return console.log(err);
        }
        console.log('El usuario existe');
        console.log(`El empleado: ${empleado} tiene un salario de ${salario}`);
    });
});
