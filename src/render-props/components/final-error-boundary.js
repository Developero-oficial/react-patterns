import {Component} from 'react';

export class FinalErrorBoundary extends Component {
  state = {hasError: false, error: null};

  componentDidCatch(error) {
    this.setState({hasError: true, error});
  }

  render() {
    const {hasError, error} = this.state;
    const {children} = this.props;

    if (hasError && !this.props.render) {
      return (
        <div>
          <p>Oops! ha ocurrido un error inesperado</p>
          {error.toString()}
        </div>
      );
    }

    if (hasError && this.props.render) {
      return this.props.render(error);
    }

    return children;
  }
}
