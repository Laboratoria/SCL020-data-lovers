import { busqueda } from './data.js';

import { primerFiltro } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/harrypotter/data.js';
const characters = data.characters;


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
//console.log(cambio.innerHTML);

function funcionMostrarPersonajes() {
    let mostrarPrincipales = document.getElementById("loQueVoyAmostrar");
    if (mostrarPrincipales.style.display === "none") {
        mostrarPrincipales.style.display = "block";
    } else {
        mostrarPrincipales.style.display = "none";
    }
}
document.getElementById("item1").addEventListener("click", funcionMostrarPersonajes)



document.getElementById("seleccionMenuCasas").addEventListener("change", () => {
    const guardaSeleccionCasa = document.getElementById("seleccionMenuCasas").value;
    const mostrarPrimerFiltro = primerFiltro(datosPersonajesPrincipales, guardaSeleccionCasa);
    console.log(mostrarPrimerFiltro);
    //console.log(guardaSeleccionCasa);
    showPersonajes(mostrarPrimerFiltro);
    //console.log(mostrarPrimerFiltro);
    const cambioDos = document.querySelector(".primeraMuestraPersonajes");
    cambioDos.innerHTML = showPersonajes(mostrarPrimerFiltro);

});
//const cambioDos = document.querySelector(".primeraMuestraPersonajes");
//cambioDos.innerHTML = showPersonajes(mostrarPrimerFiltro);
//console.log(mostrarPrimerFiltro);