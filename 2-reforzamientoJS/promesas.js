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

const getEmpleadoByID = (id) =>{

    return new Promise((resolve, reject) =>{
        const empleado = empleados.find(e => e.id ===id)?.nombre;

        (empleado)
            ? resolve(empleado)
            : reject(`El empleado con ${id} no existe`);
    });
}

const getSalarioByID = (id) =>{

    return new Promise((resolve, reject) =>{
        const salario = salarios.find(s => s.id ===id)?.salario;

        (salario)
            ? resolve(salario)
            : reject(`El empleado con ${id} no tiene salario`);
    });
}

/*const id = 3;
getEmpleadoByID(id)
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err));

getSalarioByID(id)
    .then(salario => console.log(salario))
    .catch(err => console.log(err));*/


//primera forma
/*const id = 2;
getEmpleadoByID(id)
    .then(empleado => {
        getSalarioByID(id)
            .then(salario => {
                console.log(`El empleado: ${empleado} tiene un salario de $${salario}`);
            })
            .catch(err => console.log(err));
    })
    .catch(err => console.log(err));*/


//segunda forma
 let nombre;
 const id = 2;

 getEmpleadoByID(id)
    .then(empleado => {
        nombre = empleado;
        return getSalarioByID(id);
    })
    .then( salario => {
        console.log(`El empleado ${nombre} tiene un salario de ${salario}`)
    })
    .catch( err => console.log(err));