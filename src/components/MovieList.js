import React from 'react';
import { MovieCard } from './MovieCard';


export const MovieList = ({ movies }) => {
  return (
    <div className='movie-list'>
      {movies.map(({ title, overview, genres }) => (
        <div className='movie-list__item' key={title}>
          <MovieCard key={title} title={title} overview={overview} genres={genres} />
        </div>
      ))}
    </div>

  )
}