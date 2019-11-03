import styled from 'styled-components';
import { Button, Input } from 'antd';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

// #region LeftContainer
export const LeftContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  height: inherit;
  align-items: center;
  align-content: center;
  justify-content: center;
  box-shadow: 2px 0px 5px 2px grey;
  background-color: #000000;
  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%);
`;

export const PictureContainer = styled.div`
  box-shadow: 2px 2px 5px 1px black;
  border-radius: 100%;
  width: 200px;
  height: 200px;
  padding: 25px;
`;

export const Picture = styled.div`
  background-image: url('/img/login_splash.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 100%;
`;

export const AppTitle = styled.h1`
  width: 100%;
  margin: 20px 0 0 0;
  color: white;
  text-align: center;
  text-shadow: 3px 3px 5px black;
`;
// #endregion

// #region RightContainer
export const RightContainer = styled.div`
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: center;
`;

export const LoginContainer = styled.div`
  width: 90%;
  height: auto;
`;

export const LoginTitle = styled.h2``;

export const LoginInputUser = styled(Input)`
  margin-bottom: 10px !important;
`;

export const LoginInputPass = styled(Input.Password)`
  margin-bottom: 10px !important;
`;

export const LoginSubmitButton = styled(Button)`
  width: 100%;
`;
// #endregion