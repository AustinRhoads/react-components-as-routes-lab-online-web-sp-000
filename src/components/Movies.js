import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map(movie => <div><h3>{movie.title}</h3><h4>{movie.time}</h4><p>{movie.genres}</p></div>)}
    </div>
  );
};

export default Movies;
