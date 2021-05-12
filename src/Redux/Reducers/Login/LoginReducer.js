import {
  REQ_LOGIN,
  REQ_LOGIN_FAILED,
  REQ_LOGIN_SUCCESS,
  ADD_LIST_NOTES,
  LOGOUT,
} from '../../Actions'

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  actionStatus: '',
  isLogin: false,
}

const Login = (state = initialState, action) => {
  switch (action.type) {
    case REQ_LOGIN:
      return {
        ...state,
        actionStatus: REQ_LOGIN,
        loading: true,
        error: false,
      }
    case REQ_LOGIN_SUCCESS:
      return {
        ...state,
        actionStatus: REQ_LOGIN_SUCCESS,
        loading: false,
        error: false,
        isLogin: true,
      }
    case REQ_LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        actionStatus: REQ_LOGIN_FAILED,
        errorMessage: action.msg,
        error: true,
      }
    case LOGOUT:
      return initialState
    default:
      return { ...state }
  }
}

export { Login }
