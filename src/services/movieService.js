import { toGenreMap } from "./genreService";

function toMovieWithGenres(genreMap) {
  return movie => {
    const { genre_ids, ...rest } = movie;
    const genres = genre_ids.map(id => genreMap[id] || id);
    return { ...rest, genres };
  }
}

export function parseMovies(movieData, genreData) {
  const genreMap = toGenreMap(genreData);
  const movies = movieData.map(toMovieWithGenres(genreMap));
  return movies;
}
