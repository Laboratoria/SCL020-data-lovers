import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/harrypotter/data.js';
const characters = data.characters;
const funFacts = data.funFacts;
const spells = data.spells;
const potions = data.potions;



//console.log(characters); // console: ['0', '1', '2']
const busqueda = characters.filter(item => item.associated_groups ==
    "Potter family")

//return house = Gryffindor

console.log(busqueda);

/*const casa = busqueda.filter(item => item.Gryffindor)
console.log(casa);*/