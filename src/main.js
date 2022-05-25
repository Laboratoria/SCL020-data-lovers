import { moviesFilter } from './data.js';
import data from './data/ghibli/ghibli.js';

//Accediendo a la Data
const ghibli = data.films;
const prueba = ghibli[2].description;
let movieName = moviesFilter(ghibli);
 
console.log(ghibli);

console.log(prueba);
/*
const moviesGhibli = moviesFilter();

const prueba = document.createElement("section");
prueba.innerHTML = "Hello Button";
document.body.appendChild(prueba);

    let seccion = document.createElement("button");
    let texto = document.createTextNode("Esto es una Prueba");
    seccion.appendChild(texto);
    document.body.appendChild(seccion);
    

*/
    
