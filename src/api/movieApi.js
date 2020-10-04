export function fetchMovies() {
  return fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1').then(res => res.json());
}

export function fetchGenres() {
  return fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US').then(res => res.json());
}