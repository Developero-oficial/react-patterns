import PropTypes from 'prop-types';
import {useState} from 'react';

export const FormWithRenderProps = ({initialState, children}) => {
  const [formValues, setFormValues] = useState({...initialState});

  const handleChange = ({target}) => {
    const {name, value} = target;

    setFormValues({...formValues, [name]: value});
  };

  const handleSubmit = _handleSubmit => event => {
    event.preventDefault();

    _handleSubmit(formValues);
  };

  const getStateAndHelpers = () => ({
    formValues,
    handleChange,
    handleSubmit,
  });

  return children(getStateAndHelpers());
};

FormWithRenderProps.propTypes = {
  children: PropTypes.func.isRequired,
  initialState: PropTypes.object.isRequired,
};
