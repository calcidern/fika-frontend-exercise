import React from 'react';
import { Genre } from './Genre';
import { getPosterUrl } from '../services/movieService';
import './MovieCard.css';

export const MovieCard = ({ title, overview, genres, posterPath }) => (
  <div className='movie-card'>
    <img className='movie-card__poster' src={getPosterUrl(posterPath)} alt={title} />
    <div className='movie-card__description'>
      <div className='movie-card__title'>{title}</div>
      <div className='movie-card__genres'>
        {genres.map(genre => <Genre key={genre} genre={genre} />)}
      </div>
      <div className='moview-card__overview'>
        {overview}
      </div>
    </div>
  </div>
);
