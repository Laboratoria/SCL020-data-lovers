//Filtrar peliculas por titulo
export const moviesFilter = (movie, name) => {
  let movieTitle = movie.filter(item => item.title == name);
  return movieTitle;
}; 

console.log(moviesFilter);