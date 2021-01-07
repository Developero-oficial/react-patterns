import {useState} from 'react';

import {usePlayer} from '../hooks/use-player';

const LIMIT_TIMES = 5;

export const Player = () => {
  const [count, setCount] = useState(0);
  const {tooglePlay, play, pause, isPlaying} = usePlayer();

  const handlePlay = () => {
    setCount(count + 1);
    play();
  };

  const clickedMoreTimes = () => count >= LIMIT_TIMES;

  return (
    <div className="App">
      <h1>Ejemplo de State Reducer Pattern</h1>
      <p>you clicked {count} times!</p>
      <p>
        Current status: <b>{isPlaying ? 'playing' : 'paused'}</b>
      </p>
      <button disabled={clickedMoreTimes()} onClick={handlePlay}>
        Start
      </button>
      <button onClick={pause}>Pause</button>
      <button onClick={tooglePlay}>Toogle</button>
    </div>
  );
};
