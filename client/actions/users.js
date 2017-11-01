import { BECOME_PATREON, SIGN_UP, UPDATE } from 'client/constants/redux/users'

/*
 * Is responsible for handling the interaction with users.
 */
export const becomePatreon = () => ({
  type: BECOME_PATREON,
})

export const signUp = values => ({
  payload: values,
  type: SIGN_UP,
})

export const update = values => ({
  payload: values,
  type: UPDATE,
})
