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

function funcionMostrarPersonajes() {
    let mostrarPrincipales = document.getElementById("loQueVoyAmostrar");
    if (mostrarPrincipales.style.display === "none") {
        mostrarPrincipales.style.display = "block";
    } else {
        mostrarPrincipales.style.display = "none";
    }
}
document.getElementById("item1").addEventListener("click", funcionMostrarPersonajes)





const mostrarPrimerFiltro = primerFiltro(datosPersonajesPrincipales);

console.log(mostrarPrimerFiltro);

const guardaSeleccionCasa = document.getElementById("seleccionMenuCasas").value;

document.getElementById("seleccionMenuCasas").addEventListener("change", () => {
    datosPersonajesPrincipales,
    guardaSeleccionCasa
})