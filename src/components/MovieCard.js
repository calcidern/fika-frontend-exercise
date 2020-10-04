import React from 'react';
import { Genre } from './Genre';
import './MovieCard.css';

export const MovieCard = ({ title, overview, genres }) => {
  console.log(genres);
  return (
    <div className='movie-card'>
      <div className='movie-card__title'>{title}</div>
      <div className='movie-card__genres'>
        {genres.map(genre => <Genre key={genre} genre={genre} />)}
      </div>
      <div className='moview-card__overview'>
        {overview}
      </div>
    </div>
  )
}