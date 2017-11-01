import {
  CLEAR_USER,
  FETCH_IS_LOGGED_IN,
  FETCH_SESSION_DATA,
  LOG_OUT,
  SET_IS_LOGGED_IN,
  SET_USER,
  SIGN_IN,
} from 'client/constants/redux/sessions'

/*
 * Is responsible for handling the interaction with sessions.
 * TODO: better separate clearUser and logout
 */

export const clearUser = () => (
  {
    type: CLEAR_USER,
  }
)

export const fetchIsLoggedIn = () => (
  {
    type: FETCH_IS_LOGGED_IN,
  }
)

/*
 * For fetching the isLoggedIn and the user together.
 */
export const fetchSessionData = () => (
  {
    type: FETCH_SESSION_DATA,
  }
)

export const setIsLoggedIn = value => (
  {
    payload: value,
    type: SET_IS_LOGGED_IN,
  }
)

export const setUser = value => (
  {
    payload: value,
    type: SET_USER,
  }
)

export const signIn = values => (
  {
    payload: values,
    type: SIGN_IN,
  }
)

export const logout = () => (
  {
    type: LOG_OUT,
  }
)
