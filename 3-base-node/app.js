console.clear();

let tabla = 5;
let hasta = 10;
let salida = "";


for (let i = 1; i <= hasta; i++){
    salida += `${tabla} x ${i} = ${tabla*i}\n`;
}
console.log(salida);