import { busqueda } from './data.js';

import { mostrarData } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/harrypotter/data.js';
const characters = data.characters;
const funFacts = data.funFacts;
const spells = data.spells;
const potions = data.potions;

const datosPersonajesPrincipales = busqueda(characters);
//console.log(datosPersonajesPrincipales);
const showPersonajes = (datosPersonajesPrincipales) => {
    return datosPersonajesPrincipales.map(
            (gente) =>
            `<div class="contenedorDePersonajes">
            <img src="" alt=""/>
            <p>${gente.name}</p>
            <p>${gente.birth}</p>
            <p>${gente.species}</p>
            <p>${gente.house}</p>
            <p>${gente.patronus}</p>
        </div>`
        )
        .join("");
};

const cambio = document.querySelector(".primeraMuestraPersonajes");
cambio.innerHTML = showPersonajes(datosPersonajesPrincipales);



//let dataOriginal = [];
//dataOriginal.push(busqueda);
//console.log(dataOriginal);





/*let aquiEstamosGuardando = [];
aquiEstamosGuardando.push(mostrarData);
aquiEstamosGuardando.forEach(item => {
    const elPersonaje350 = document.getElementById("item1");
    let h1 = document.createElement("h1");
    h1.innerHTML = `<li>${id}</li>`;
})

//console.log(mostrarData(characters));*/














/*const item = document.getElementById("item1");
dataOriginal.forEach(elementos => {
    item.innerHTML = `<li>${elementos.name} </li>`
})
console.log(item);*/