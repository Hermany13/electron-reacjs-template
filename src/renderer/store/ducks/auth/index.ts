// #region 
import { Reducer } from 'redux';
import { createActions, createReducer } from 'reduxsauce';

import { IAuthState, IAuthAction, IAuthTypes } from './interfaces';
// #endregion

// Actions & Creators
export const { Types, Creators } = createActions<IAuthTypes>({
  authStart: [],
  authSuccess: [],
  authFail: [],
  authLogout: []
})

const INITIAL_STATE: IAuthState = {
  token: null,
  refreshToken: null,
  error: null,
  loading: false
}

// Reducers
const authStart: Reducer<IAuthState, IAuthAction> = (state = INITIAL_STATE, _action) => ({
  ...state,
  error: null,
  loading: true
});

const authSuccess: Reducer<IAuthState, IAuthAction> = (state = INITIAL_STATE, action) => ({
  ...state,
  token: action.token,
  refreshToken: action.refreshToken,
  error: null,
  loading: false
});

const authFail: Reducer<IAuthState, IAuthAction> = (state = INITIAL_STATE, action) => ({
  ...state,
  error: action.error,
  loading: false
});

const authLogout: Reducer<IAuthState, IAuthAction> = (state = INITIAL_STATE, _action) => ({
  ...state,
  token: null,
  refreshToken: null,
  error: null
});

export default createReducer(INITIAL_STATE, {
  [Types.AUTH_START]: authStart,
  [Types.AUTH_SUCCESS]: authSuccess,
  [Types.AUTH_FAIL]: authFail,
  [Types.AUTH_LOGOUT]: authLogout
});