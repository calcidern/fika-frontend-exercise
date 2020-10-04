import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchGenres, fetchMovies } from './api/movieApi';
import { parseMovies } from './services/movieService';
import { MovieList } from './components/MovieList';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    Promise.all([fetchMovies(), fetchGenres()])
      .then(([{ results }, { genres }]) => [results, genres])
      .then(([movieData, genreData]) => parseMovies(movieData, genreData))
      .then(setMovies);
  }, []);


  return (
    <div className="App">
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
