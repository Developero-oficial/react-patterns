import {useState} from 'react';

const withControlledForm = (Form, initialState = {}) => {
  const ControlledForm = ({onSubmit}) => {
    const [formValues, setFormValues] = useState(initialState);

    const handleChange = e => {
      const {
        target: {name, value},
      } = e;
      setFormValues({...formValues, [name]: value});
    };

    const handleSubmit = e => {
      e.preventDefault();
      onSubmit(formValues);
    };

    return (
      <Form
        formValues={formValues}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    );
  };

  return ControlledForm;
};

const MyFormA = ({formValues, handleChange, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>Name</p>
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
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
      <button type="submit">Submit</button>
    </form>
  );
};

export const MyFormAControlled = withControlledForm(MyFormA, {
  name: 'john doe',
  jobTitle: 'full stack developer',
});
