export const example = (papitas) => {
  console.log(papitas);
};

// funcion que filtra por nombre
export const filterData = (search, allInfo) => {
  let dataCharacterSelected = [];
  console.log(search);
  dataCharacterSelected = allInfo.filter(
    (info) => info.name.toLocaleLowerCase() == search.toLocaleLowerCase()
  );
  return dataCharacterSelected;
};
// funcion que trae las especies no repetidas
export const allSpecies = (allInfo) => {
  const allInfoSpecies = allInfo.map((i) => i.species);
  let onlySpecies = [];
  allInfoSpecies.forEach((element) => {
    if (!onlySpecies.includes(element)) {
      onlySpecies.push(element);
    }
  });
  return onlySpecies;
}
// funcion que trae los estados no repetidos
export const allStatus = (allInfo) => {
  const infoAllStatus = allInfo.map((i) => i.status);
  let onlyStatus = [];
  infoAllStatus.forEach((element) => {
    if (!onlyStatus.includes(element)) {
      onlyStatus.push(element);
    }
  });
  return onlyStatus;
};
// funcion que trae los datos segun la especie seleccionada
export const characterSpecies = (speciesSelect, allInfo) => {
  console.log(speciesSelect);
  let machtCharacters = allInfo.filter((info) => info.species == speciesSelect);
  return machtCharacters;
};
// funcion que trae los datos segun el planeta seleccionado
// export const characterPlanet = (planetSelect, allinfo) => {
//   let machtCharacters = allInfo.filter((info) => info.planet == planetSelect);
//   console.log(machtCharacters);
// };
// funcion que me trae los datos segun el estado seleccionado
export const charactersStatus = (statusSelect, allInfo) => {
  let machtCharacters = allInfo.filter((info) => info.status == statusSelect);
  return machtCharacters;
};
// limpiar los select si eligen otro
 export const clean = (sel1, sel2) => {
   sel1.value = sel1.options[0].value;
//   sel2.value = sel2.options[0].value;
};
 export const lookSelectSpecies = (speciesSelect, characters) => {
   const namesAndSpecies = characters.map((character) => character.name);
   namesAndSpecies.sort();
   let listCharacter = `<h3>${speciesSelect}</h3><ul>`;
   namesAndSpecies.forEach((character) => {
     listCharacter += `<li>${character}</li>`;
   });
   listCharacter += `</ul>`;
  return listCharacter;
};
export const lookSelector = (statusSelect, characters) => {
  const namesAndStatus = characters.map((character) => character.name);
  namesAndStatus.sort();
  let listCharacter = `<h3>${statusSelect}</h3><ul>`;
  namesAndStatus.forEach((character) => {
    listCharacter += `<li>${character}</li>`;
  });
  listCharacter += `</ul>`;
  return listCharacter;
};
