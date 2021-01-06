import PropTypes from 'prop-types';

import {useControlledForm} from '../hooks/useControlledForm';

export const FormWithHook = ({onSubmit}) => {
  const {formValues, getInputProps, handleSubmit} = useControlledForm({
    name: '',
    jobTitle: '',
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <p>Name</p>
        <input
          type="text"
          name="name"
          value={formValues.name}
          {...getInputProps({
            onChange: () => console.log('updated'),
          })}
        />
      </div>
      <div>
        <p>Job Title</p>
        <input
          type="text"
          name="jobTitle"
          value={formValues.jobTitle}
          {...getInputProps()}
        />
      </div>
      <button style={{margin: '8px 0'}} type="submit">
        Submit
      </button>
    </form>
  );
};

FormWithHook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
