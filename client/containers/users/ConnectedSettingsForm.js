/* eslint import/no-mutable-exports: 0 */

import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import { openModal } from 'client/actions/lib/modals'
import { logout } from 'client/actions/sessions'
import { update } from 'client/actions/users'
import translate from 'client/lib/translate'
import SettingsForm from 'client/components/users/SettingsForm'
import { SETTINGS_FORM } from 'client/constants/forms'
import { CONFIRM_LOGOUT_MODAL } from 'client/constants/modals'

const validate = (values) => {
  const errors = {}

  const passwordsArePresentAndDifferent =
    values.password && values.password !== values.passwordConfirm

  if (passwordsArePresentAndDifferent) {
    errors.passwordConfirm = translate('app.forms.validation.passwordConfirm.match')
  }
  return errors
}

/*
 * Is responsible for connecting a SettingsForm to ReduxForm.
 */
let ConnectedSettingsForm = reduxForm({
  enableReinitialize: true,
  form: SETTINGS_FORM,
  validate,
})(SettingsForm)

const mapStateToProps = state => ({
  guest: state.app.session.user.guest,
  initialValues: state.app.session.user,
})

const mapDispatchToProps = dispatch => ({
  onLogoutClick: (guest) => {
    if (guest) {
      dispatch(openModal(CONFIRM_LOGOUT_MODAL))
    } else {
      dispatch(logout())
    }
  },
  onSubmit: (values) => {
    dispatch(update(values))
  },
})

ConnectedSettingsForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedSettingsForm)

export default ConnectedSettingsForm
