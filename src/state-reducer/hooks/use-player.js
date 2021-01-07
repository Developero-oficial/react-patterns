import {useState} from 'react';

export const usePlayer = () => {
  const [isPlaying, setPlaying] = useState(false);

  const tooglePlay = () => setPlaying(!isPlaying);
  const play = () => setPlaying(true);
  const pause = () => setPlaying(false);

  return {
    tooglePlay,
    isPlaying,
    play,
    pause,
  };
};
