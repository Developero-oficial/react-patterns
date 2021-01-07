import {useState} from 'react';

export const useControlledForm = (initialState = {}) => {
  const [formValues, setFormValues] = useState(initialState);

  const handleChange = ({target}) => {
    const {name, value} = target;
    setFormValues({...initialState, [name]: value});
  };

  const handleSubmit = cb => e => {
    e.preventDefault();
    cb(formValues);
  };

  const resetForm = () => {
    setFormValues(initialState);
  };

  return {
    formValues,
    handleChange,
    handleSubmit,
    resetForm,
  };
};
