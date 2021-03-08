/*setTimeout(()=>{
    console.log('Hola mundo')
}, 1000)*/

/*const getUsuarioByID = (id, callback) =>{
    const usuario = {
        id,
        nombre: 'Cristian'
    }

    setTimeout(()=>{
        console.log(usuario)
    }, 1500);
};

getUsuarioByID(10);*/

const getUsuarioByID = (id, callback) =>{
    const usuario = {
        id,
        nombre: 'Cristian'
    }

    setTimeout(()=>{
        callback(usuario)
    }, 1500);
};

getUsuarioByID(10, (usuario) =>{
    console.log(usuario.id);
    console.log(usuario.nombre);
});
console.log('Holis');