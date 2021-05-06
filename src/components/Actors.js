import React from 'react';
import { actors } from '../data';

const Actors = () => {
  console.log(actors)



  return (
    <div>
      <h1>Actors Page</h1>
      { actors.map(actor => <div><h3>{actor.name}</h3><p>{actor.movies}</p></div>)}
     
    </div>
  );
};

export default Actors;
