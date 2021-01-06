import PropTypes from 'prop-types';

import {withControlledForm} from '../hocs/with-controlled-form';

const Form = ({formValues, getInputProps, handleSubmit, onSubmit}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <p>Name</p>
        <input
          type="text"
          name="name"
          value={formValues.name}
          {...getInputProps({
            onChange: () => console.log('changed'),
          })}
        />
      </div>
      <div>
        <p>Job Title</p>
        <input
          type="text"
          name="jobTitle"
          value={formValues.jobTitle}
          {...getInputProps({
            onChange: () => console.log('changed 2'),
          })}
        />
      </div>
      <button style={{margin: '8px 0'}} type="submit">
        Submit
      </button>
    </form>
  );
};

Form.propTypes = {
  formValues: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export const FormWithHoc = withControlledForm(Form, {
  name: '',
  jobTitle: '',
});
