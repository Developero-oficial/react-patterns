import React, {useState} from 'react';

import {LikeButton} from './like-button';
import {FinalLikeButton} from './final-like-button';

export const ControlPropsPage = () => {
  const [counter, setCounter] = useState(0);

  const handleUpdateCounter = () => {
    setCounter(counter + 5);
  };

  const handleChange = ({target: {value}}) => {
    if (value === 'like') {
      setCounter(counter + 1);
    }
  };

  return (
    <>
      <h2>Ejemplo sin Control Props</h2>
      <LikeButton cb={likes => likes + 100} />
      <hr />

      <h2>Ejemplo con Control Props</h2>
      <input type="text" onChange={handleChange} />
      <FinalLikeButton value={counter} setValue={handleUpdateCounter} />
    </>
  );
};
