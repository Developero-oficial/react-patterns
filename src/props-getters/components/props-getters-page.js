import React from 'react';

import {FormWithRenderProps} from './form-with-render-props';
import {FinalFormWithRenderProps} from './final-with-render-props';
import {FormWithHoc} from './form-with-hoc';
import {FormWithHook} from './form-with-hook';

export const PropsGettersPage = () => {
  const onSubmit = values => alert(JSON.stringify(values));

  const _handleChange = handleChange => e => {
    alert('change');
    handleChange(e);
  };

  const logChange = () => {
    console.log('changed!');
  };

  return (
    <>
      <h2>Ejemplo sin Props Getters</h2>
      <FormWithRenderProps initialState={{name: '', jobTitle: ''}}>
        {({formValues, handleChange, handleSubmit}) => (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <p>Name</p>
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={_handleChange(handleChange)}
              />
            </div>
            <div>
              <p>Job Title</p>
              <input
                type="text"
                name="jobTitle"
                value={formValues.jobTitle}
                onChange={handleChange}
              />
            </div>
            <button style={{margin: '8px 0'}} type="submit">
              Submit
            </button>
          </form>
        )}
      </FormWithRenderProps>

      <hr />

      <h2>Ejemplo con Props Getters y Render Props</h2>
      <FinalFormWithRenderProps initialState={{name: '', jobTitle: ''}}>
        {({formValues, getInputProps, handleSubmit}) => (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <p>Name</p>
              <input
                type="text"
                name="name"
                value={formValues.name}
                {...getInputProps({onChange: logChange})}
              />
            </div>
            <div>
              <p>Job Title</p>
              <input
                type="text"
                name="jobTitle"
                value={formValues.jobTitle}
                {...getInputProps({onChange: logChange})}
              />
            </div>
            <button style={{margin: '8px 0'}} type="submit">
              Submit
            </button>
          </form>
        )}
      </FinalFormWithRenderProps>

      <hr />

      <h2>Ejemplo con Props Getters y HOC</h2>
      <FormWithHoc onSubmit={onSubmit} />

      <hr />

      <h2>Ejemplo con Props Getters y Custom Hook</h2>
      <FormWithHook onSubmit={onSubmit} />
    </>
  );
};
