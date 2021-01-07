import {useReducer} from 'react';

import {actionTypes} from '../action-types';

export const playerReducer = (state, action) => {
  if (action.type === actionTypes.TOOGLE_PLAYING) {
    return {isPlaying: !state.isPlaying};
  }

  if (action.type === actionTypes.PLAY) {
    return {isPlaying: true};
  }

  if (action.type === actionTypes.PAUSE) {
    return {isPlaying: false};
  }

  return state;
};

export const usePlayerReducer = ({reducer = playerReducer} = {}) => {
  const [{isPlaying}, dispatch] = useReducer(reducer, {isPlaying: false});

  const tooglePlay = () => dispatch({type: actionTypes.TOOGLE_PLAYING});
  const play = () => dispatch({type: actionTypes.PLAY});
  const pause = () => dispatch({type: actionTypes.PAUSE});

  return {
    tooglePlay,
    isPlaying,
    play,
    pause,
  };
};

export {actionTypes};
