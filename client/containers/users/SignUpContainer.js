import { connect } from 'react-redux'

import { closeModal, openModal } from 'client/actions/lib/modals'
import { signUp } from 'client/actions/users'
import {
  FORGOT_PASSWORD_MODAL,
  LOGIN_MODAL,
  SIGN_UP_MODAL,
} from 'client/constants/modals'
import ConnectedSignUpForm from 'client/containers/users/ConnectedSignUpForm'

const mapStateToProps = null
const mapDispatchToProps = dispatch => ({
  onForgotPasswordClick: () => {
    dispatch(closeModal(SIGN_UP_MODAL))
    dispatch(closeModal(LOGIN_MODAL))
    dispatch(openModal(FORGOT_PASSWORD_MODAL))
    alert('Forgot? You can do it!')
  },
  onLoginClick: () => {
    dispatch(closeModal(FORGOT_PASSWORD_MODAL))
    dispatch(closeModal(SIGN_UP_MODAL))
    dispatch(openModal(LOGIN_MODAL))
  },
  onSubmit: (values) => {
    dispatch(signUp(values))
  },
})

const SignUpContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedSignUpForm)

export default SignUpContainer
