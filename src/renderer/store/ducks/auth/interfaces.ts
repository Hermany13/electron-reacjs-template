export interface IAuthTypes {
  AUTH_START: string
  AUTH_SUCCESS: string
  AUTH_FAIL: string
  AUTH_LOGOUT: string
}

export interface IAuthState {
  token: string
  refreshToken: string
  error: string
  loading: boolean
}

export interface IAuthAction extends IAuthState {
  type: string
}