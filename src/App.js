import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchGenres, fetchMovies } from './api/movieApi';

function App() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(()=>{
    fetchMovies().then(({results}) => setMovies(results))
    fetchGenres().then(({genres}) => setGenres(genres))
  }, []);


  return (
    <div className="App">
    </div>
  );
}

export default App;
