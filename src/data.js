// estas funciones son de ejemplo

export const example = () => {
    return 'example';
};

export const anotherExample = () => {
    return 'OMG';

};

/*export const search = (query) => {
    return characters.filter(item => {
        return item.name.includes(query);
    })
}
console.log(search('potter'));*/

export const busqueda = (arrayCharacters) => {
    //console.log(arrayCharacters)
    const arrayFiltradoPorID = arrayCharacters.filter((item) => item.id ==
        "326" || item.id == "476" || item.id == "587" ||
        item.id == "472" || item.id == "473" ||
        item.id == "258" || item.id == "117" ||
        item.id == "743" || item.id == "267" ||
        item.id == "254" || item.id == "756" ||
        item.id == "744" || item.id == "123" ||
        item.id == "327" || item.id == "679" ||
        item.id == "382" || item.id == "350");
    return arrayFiltradoPorID;

}