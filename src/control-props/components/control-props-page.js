import React from 'react';

import {LikeButton} from './like-button';

export const ControlPropsPage = () => (
  <>
    <h2>Ejemplo sin Control Props</h2>
    <LikeButton cb={likes => likes + 100} />
    <hr />

    <h2>Ejemplo con Control Props</h2>
  </>
);
