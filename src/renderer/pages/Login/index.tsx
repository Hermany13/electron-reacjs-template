// #region Imports
// React main
import React from 'react';

import {
  Container,
  LoginContainer,
  LeftContainer,
  RightContainer,
  PictureContainer,
  Picture,
  AppTitle,
  LoginInputPass,
  LoginInputUser,
  LoginTitle,
  LoginSubmitButton
} from './styles';
// #endregion

const Login = (): JSX.Element => {

  return (
    <Container>
      <LeftContainer>
        <PictureContainer>
          <Picture />
        </PictureContainer>
        <AppTitle>Electron template app</AppTitle>
      </LeftContainer>
      <RightContainer>
        <LoginContainer>
          <LoginTitle>Login</LoginTitle>
          <LoginInputUser placeholder="Username" />
          <LoginInputPass placeholder="Password" />
          <LoginSubmitButton type="primary">
            Enter
          </LoginSubmitButton>
        </LoginContainer>
      </RightContainer>
    </Container>
  );
}

export default Login;