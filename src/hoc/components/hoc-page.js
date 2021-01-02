import React from 'react';
import {NormalForm} from './normal-form';

export const HocPage = () => {
  const handleNormalSubmit = data => alert(data);
  return (
    <>
      <h2>Ejemplo sin High Order Component (HOC)</h2>
      <NormalForm onSubmit={handleNormalSubmit} />

      <hr />

      <h2>Ejemplo con High Order Component (HOC)</h2>
    </>
  );
};
