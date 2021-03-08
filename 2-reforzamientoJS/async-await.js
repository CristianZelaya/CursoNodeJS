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

const getInfoUsuario = async(id) =>{

    try{

        const empleado = await getEmpleadoByID(id);
        const salario = await getSalarioByID(id);

        return `El empleado ${empleado} tiene un salario de $${salario}`;

    }catch(err){
    
        throw err;

    }
}

const id = 3;

getInfoUsuario(id)
    .then(msg => {
        console.log("todo bien");
        console.log(msg);  
    })
    .catch(err => {
        console.log("todo mal");
        console.log(err);
    });