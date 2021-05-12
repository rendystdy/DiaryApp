import { REQ_LOGIN, REQ_LOGIN_FAILED, REQ_LOGIN_SUCCESS, LOGOUT } from './'
import auth from '@react-native-firebase/auth'
import { showMessage, hideMessage } from 'react-native-flash-message'
import { navigate } from '../../Navigators/Root'

import AsyncStorage from '@react-native-async-storage/async-storage'

const loginRequest = (email, password) => async dispatch => {
  dispatch({ type: REQ_LOGIN })

  try {
    const response = await auth().signInWithEmailAndPassword(email, password)

    if (response !== null) {
      showMessage({
        message: 'Success Login',
        type: 'success',
      })
      await AsyncStorage.setItem('isLogin', 'success')
      dispatch({ type: REQ_LOGIN_SUCCESS })
    } else {
      dispatch({
        type: REQ_LOGIN_FAILED,
        msg: 'Something wrong!',
      })
    }
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      showMessage({
        message: 'That email address is already in use!',
        type: 'danger',
      })
      dispatch({
        type: REQ_LOGIN_FAILED,
        msg: 'That email address is already in use!',
      })
    }
    if (error.code === 'auth/invalid-email') {
      dispatch({
        type: REQ_LOGIN_FAILED,
        msg: 'That email address is invalid!',
      })
      showMessage({
        message: 'That email address is invalid!',
        type: 'danger',
      })
    }
    if (error.code === 'auth/user-not-found') {
      dispatch({
        type: REQ_LOGIN_FAILED,
        msg: 'That email not found!',
      })
      showMessage({
        message: 'That email not found!',
        type: 'danger',
      })
    }
  }
}

const logout = () => async dispatch => {
  try {
    await AsyncStorage.removeItem('isLogin')
    navigate('LoginPage')
    dispatch({ type: 'LOGOUT' })
  } catch (e) {
    // remove error
  }
}

export { loginRequest, logout }
