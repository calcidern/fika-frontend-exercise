import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchGenres, fetchMovies } from './api/movieApi';
import { parseMovies } from './services/movieService';

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
    </div>
  );
}

export default App;
