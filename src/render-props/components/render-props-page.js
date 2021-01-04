import React, {useState} from 'react';

import {ErrorBoundary} from './error-boundary';
import {FinalErrorBoundary} from './final-error-boundary';

const MyBug = () => {
  const [isError, setIsError] = useState(false);

  const handleCrash = () => {
    setIsError(true);
  };

  if (isError) {
    throw new Error('nani?');
  }

  return <button onClick={handleCrash}>Crashear la app</button>;
};

export const RenderPropsPage = () => (
  <>
    <h2>Ejemplo sin Render Props</h2>
    <ErrorBoundary>
      <MyBug />
    </ErrorBoundary>

    <hr />

    <h2>Ejemplo con Render Props</h2>
    <FinalErrorBoundary render={error => <p>{`Ups D: ${error.message}`}</p>}>
      <MyBug />
    </FinalErrorBoundary>
  </>
);
