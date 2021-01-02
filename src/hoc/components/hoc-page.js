import React from 'react';
import {NormalForm} from './normal-form';
import {MyFormAControlled} from './form-with-hoc';

export const HocPage = () => {
  const handleNormalSubmit = data => alert(data);
  const handleHocSubmit = data => alert(JSON.stringify(data));
  return (
    <>
      <h2>Ejemplo sin High Order Component (HOC)</h2>
      <NormalForm onSubmit={handleNormalSubmit} />

      <hr />

      <h2>Ejemplo con High Order Component (HOC)</h2>
      <MyFormAControlled onSubmit={handleHocSubmit} />
    </>
  );
};
