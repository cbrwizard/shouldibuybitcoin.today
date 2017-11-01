import { reduxForm } from 'redux-form'

import translate from 'client/lib/translate'
import SignUpForm from 'client/components/users/SignUpForm'
import { SIGN_UP_FORM } from 'client/constants/forms'

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
 * Is responsible for connecting a SignUpForm to ReduxForm.
 */
const ConnectedSignUpForm = reduxForm({
  form: SIGN_UP_FORM,
  validate,
})(SignUpForm)

export default ConnectedSignUpForm
