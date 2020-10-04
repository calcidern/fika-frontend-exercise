import React from 'react';
import { Genre } from './Genre';

export const MovieCard = ({ title, overview, genres }) => {
  return (
    <div className='movie-card'>
      <div className='movie-card__title'>{title}</div>
      <div className='movie-card__genres'>
        {genres.map(genere => <Genre key={genere} genre={genres} />)}
      </div>
      <div className='moview-card__overview'>
        {overview}
      </div>
    </div>
  )
}