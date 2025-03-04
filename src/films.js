const movies = require('./data.js');

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((movie) => movie.director);
  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((movie) => movie.director === director);
  console.log('EXERCICE 2 ->', result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const filteredArray = getMoviesFromDirector(array, director);
  let sum = filteredArray.reduce((acc, movie) => acc + movie.score, 0);
  const result = Number((sum / filteredArray.length).toFixed(2));
  return result;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  const result = array
    .map((movie) => movie.title)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  return result.slice(0, 20);
}
const orderedAlphabetically = orderAlphabetically(movies);
debugger

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  return [...array].sort((a, b) =>
    a.year === b.year ? a.title.localeCompare(b.title) : a.year - b.year
  );
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  const filteredArray = array.filter(
    (movie) => movie.genre.includes(genre) && movie.score != null
  );
  if (filteredArray.length === 0) return 0;

  const sum = filteredArray.reduce((acc, movie) => acc + movie.score, 0);
  const result = Number((sum / filteredArray.length).toFixed(2));
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  return array.map((movie) => {
    let hours = 0,
      minutes = 0;
    let match = movie.duration.match(/(\d+)h/); // Extract hours
    if (match) hours = parseInt(match[1]);

    match = movie.duration.match(/(\d+)m/); // Extract minutes
    if (match) minutes = parseInt(match[1]);

    return { ...movie, duration: hours * 60 + minutes };
  });
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const yearMovies = array.filter((movie) => movie.year === year);
  if (!yearMovies.length) return null;

  const maxScore = Math.max(...yearMovies.map((movie) => movie.score));
  return yearMovies.filter((movie) => movie.score === maxScore);
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
