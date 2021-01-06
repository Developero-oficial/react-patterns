import {useState} from 'react';

function callAll(...fns) {
  return function (...args) {
    fns.forEach(fn => fn && fn(...args));
  };
}

export const useControlledForm = initialState => {
  const [formValues, setFormValues] = useState({...initialState});

  const handleChange = ({target}) => {
    const {name, value} = target;

    setFormValues({...formValues, [name]: value});
  };

  const handleSubmit = _handleSubmit => event => {
    event.preventDefault();

    _handleSubmit(formValues);
  };

  const getInputProps = (props = {}) => ({
    onChange: callAll(props.onChange, handleChange),
  });

  const getStateAndHelpers = () => ({
    formValues,
    handleSubmit,
    getInputProps,
  });

  return {
    handleSubmit,
    ...getStateAndHelpers(),
  };
};
