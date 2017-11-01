import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import React from 'react'
import { func, object } from 'prop-types'
import { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog'
import { Field } from 'redux-form'
import { withStyles } from 'material-ui/styles'
import { injectIntl, intlShape } from 'react-intl'

import ReduxFormTextField from 'client/components/form/ReduxFormTextField'

const styleSheet = {
  alternative: {
    margin: '5px 0 0',
  },
  button: {
    margin: '2px',
  },
  form: {
    width: '400px',
  },
}

const propTypes = {
  classes: object.isRequired,
  handleSubmit: func.isRequired,
  intl: intlShape.isRequired,
  onForgotPasswordClick: func.isRequired,
  onLoginClick: func.isRequired,
}

/*
 * Is responsible for rendering a Sign Up form.
 */
const SignUpForm = ({
  classes,
  handleSubmit,
  intl,
  onLoginClick,
  onForgotPasswordClick,
}) => (
  <form onSubmit={handleSubmit} className={`${classes.form} h-center-text`}>
    <DialogTitle>
      {intl.formatMessage({ id: 'app.titles.signUp' })}
    </DialogTitle>
    <DialogContent>
      <Grid item>
        <Field
          fullWidth
          name="email"
          component={ReduxFormTextField}
          label={intl.formatMessage({ id: 'app.forms.email.label' })}
          type="email"
        />
      </Grid>
      <Grid item>
        <Field
          fullWidth
          name="password"
          component={ReduxFormTextField}
          label={intl.formatMessage({ id: 'app.forms.password.label' })}
          type="password"
        />
      </Grid>
      <Grid item>
        <Field
          fullWidth
          name="passwordConfirm"
          component={ReduxFormTextField}
          label={intl.formatMessage({ id: 'app.forms.confirmPassword.label' })}
          type="password"
        />
      </Grid>
      <Grid item className={classes.alternative}>
        <span>
          {intl.formatMessage({ id: 'app.general.or' })}
        </span>
        <Button className={classes.button} dense onClick={onLoginClick}>
          {intl.formatMessage({ id: 'app.links.login' })}
        </Button>
        <span>
          /
        </span>
        <Button
          className={classes.button}
          dense
          onClick={onForgotPasswordClick}
        >
          {intl.formatMessage({ id: 'app.links.forgotPassword' })}
        </Button>
      </Grid>
    </DialogContent>
    <DialogActions>
      <Grid item>
        <Button color="accent" className={classes.button} type="submit" raised>
          {intl.formatMessage({ id: 'app.forms.save' })}
        </Button>
      </Grid>
    </DialogActions>
  </form>
)

SignUpForm.propTypes = propTypes

export default withStyles(styleSheet)(injectIntl(SignUpForm))
