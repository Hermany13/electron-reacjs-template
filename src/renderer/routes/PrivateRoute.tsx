import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

interface IPrivateRoutesProps extends RouteProps {
  component: any
  isSignedIn: boolean
}

const PrivateRoute = (props: IPrivateRoutesProps) => {

  const { component: Component, isSignedIn, ...rest } = props;

  return (
    <Route
      {...rest}
      render={props =>
        isSignedIn
          ? (<Component {...props} />)
          : (<Redirect to={'/'} />)
      }
    />
  )
}

export default PrivateRoute;