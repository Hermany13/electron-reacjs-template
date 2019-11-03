// #region Imports
// React main
import React from 'react';

// Routers
import { Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

// Components
import Login from '../pages/Login';
import Users from '../pages/Users';

// App navigation history
import appHistory from '../utils/appHistory';
// #endregion

appHistory.push('/users')

const Routes = (): JSX.Element => {
  return (
    <>
      <Router history={appHistory}>
        <Switch>
          <Route exact path='/' component={Login} />
          <PrivateRoute exact path='/users' component={Users} isSignedIn={true} />
        </Switch>
      </Router>
    </>
  );
}

export default Routes;