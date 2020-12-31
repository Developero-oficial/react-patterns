import {Route, Switch} from 'react-router-dom';
import {routes} from '../routes';

export const AppRouter = () => (
  <Switch>
    {routes.map(({path, Component, exact = false}) => (
      <Route exact={exact} path={path} component={Component} key={path} />
    ))}
  </Switch>
);
