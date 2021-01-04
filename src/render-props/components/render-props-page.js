import React, {useState} from 'react';

import {ErrorBoundary} from './error-boundary';

const MyBug = () => {
  const [isError, setIsError] = useState(false);

  const handleCrash = () => {
    setIsError(true);
  };

  if (isError) {
    throw new Error(':(');
  }

  return <button onClick={handleCrash}>Crashear la app</button>;
};

export const RenderPropsPage = () => (
  <>
    <h2>Ejemplo sin Render Props</h2>
    <ErrorBoundary>
      <MyBug />
    </ErrorBoundary>
  </>
);
