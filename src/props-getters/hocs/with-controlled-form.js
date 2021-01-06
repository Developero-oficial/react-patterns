import {Component} from 'react';

function callAll(...fns) {
  return function (...args) {
    fns.forEach(fn => fn && fn(...args));
  };
}

export const withControlledForm = (FormComponent, initialState = {}) =>
  class WithFormMethodsHOC extends Component {
    constructor(props) {
      super(props);

      this.state = {
        formValues: {...initialState},
      };
    }

    handleChange = e => {
      const {name, value} = e.target;
      const {formValues} = this.state;

      formValues[name] = value;
      this.setState({formValues});
    };

    handleSubmit = _handleSubmit => e => {
      e.preventDefault();
      const {formValues} = this.state;

      _handleSubmit(formValues);
    };

    getInputProps = (props = {}) => ({
      onChange: callAll(props.onChange, this.handleChange),
    });

    getStateAndHelpers = () => ({
      formValues: this.state.formValues,
      handleSubmit: this.handleSubmit,
      getInputProps: this.getInputProps,
    });

    render() {
      return (
        <FormComponent
          {...this.props}
          handleSubmit={this.handleSubmit}
          {...this.getStateAndHelpers()}
        />
      );
    }
  };
