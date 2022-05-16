import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/harrypotter/data.js';
const characters = data.characters;
const funFacts = data.funFacts;
const spells = data.spells;
const potions = data.potions;



//console.log(characters); // console: ['0', '1', '2']
const busqueda = characters.filter(item => item.id ==
    "326" || item.id == "476" || item.id == "587" ||
    item.id == "472" || item.id == "473" ||
    item.id == "258" || item.id == "117" ||
    item.id == "743" || item.id == "267" ||
    item.id == "254" || item.id == "756" ||
    item.id == "744" || item.id == "123" ||
    item.id == "327" || item.id == "679" ||
    item.id == "382" || item.id == "350")
const dataOriginal = [];
dataOriginal.push(busqueda);


console.log(dataOriginal);

/*const casa = busqueda.filter(item => item.Gryffindor)
return house = Gryffindor
console.log(casa); esta no funciono ya que estamos llamando a gryffindor que es un valor*/