const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',

    getnombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    }
}

//console.log(deadpool.getnombre());

/*const nombre = deadpool.nombre;
const apellido = deadpool.apellido;
const poder = deadpool.poder;*/

//const {nombre, apellido, poder} = deadpool;
//console.log(nombre, apellido, poder);
//console.log(poder);

/*function imprimirHeroe(heroe){
    const {nombre, apellido, poder} = heroe;
    console.log(nombre, apellido, poder);
}*/

/*function imprimirHeroe({nombre, apellido, poder}){
    console.log(nombre, apellido, poder);
}
imprimirHeroe(deadpool);*/


const heroes = ['Deadpool', 'SuperMan', 'Batman'];

//const h1 = heroes[0];
//const h2 = heroes[1];
//const h3 = heroes[2];

const [, , h3] = heroes;

console.log(h3);