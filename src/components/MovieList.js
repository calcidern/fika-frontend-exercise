import React from 'react';
import { MovieCard } from './MovieCard';


export const MovieList = ({ movies }) => (
  <div className='movie-list'>
    {movies.map(({ title, overview, genres, poster_path }) => (
      <div className='movie-list__item' key={title}>
        <MovieCard key={title} title={title} overview={overview} genres={genres} posterPath={poster_path} />
      </div>
    ))}
  </div>

);