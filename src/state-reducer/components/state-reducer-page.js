import React from 'react';

import {Player} from './player';
import {PlayerReducer} from './player-reducer';

export const StateReducerPage = () => (
  <>
    <h2>Ejemplo sin State Reducer</h2>
    <Player />

    <hr />
    <h2>Ejemplo con State Reducer</h2>
    <PlayerReducer />
  </>
);
