import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import React from 'react'
import { bool, func, object } from 'prop-types'
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog'
import { Field } from 'redux-form'
import { withStyles } from 'material-ui/styles'
import { injectIntl, intlShape } from 'react-intl'

import ConfirmLogoutContainerModal
  from 'client/containers/sessions/ConfirmLogoutContainerModal'
import NotYouButton from 'client/components/buttons/NotYouButton'
import ReduxFormTextField from 'client/components/form/ReduxFormTextField'
import ReduxFormColorPickerField
  from 'client/components/form/ReduxFormColorPickerField'

const styleSheet = {
  button: {
    margin: '2px',
  },
  colorPickerContainer: {
    margin: '25px 0 0',
  },
  convertNotice: {
    margin: '0 0 15px',
  },
  form: {
    'max-height': '90vh',
    overflow: 'auto',
    width: '600px',
  },
  nickContainer: {
    margin: '0 0 20px',
  },
}

const propTypes = {
  change: func.isRequired,
  classes: object.isRequired,
  guest: bool.isRequired,
  handleSubmit: func.isRequired,
  intl: intlShape.isRequired,
  onLogoutClick: func.isRequired,
  submitting: bool.isRequired,
}

/*
 * Is responsible for rendering a Settings form.
 */
const SettingsForm = ({
  classes,
  change,
  handleSubmit,
  onLogoutClick,
  guest,
  intl,
  submitting,
}) => {
  let passwordLabelId
  let convertNotice
  if (guest) {
    passwordLabelId = 'app.forms.password.label'
    convertNotice = (
      <DialogContentText className={classes.convertNotice}>
        {intl.formatMessage({ id: 'app.text.guestConvertNotice' })}
      </DialogContentText>
    )
  } else {
    passwordLabelId = 'app.forms.password.label.new'
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <DialogTitle className="h-center-text">
        {intl.formatMessage({ id: 'app.titles.settings' })}
      </DialogTitle>
      <DialogContent>
        {convertNotice}
        <Grid item className={classes.nickContainer}>
          <Field
            fullWidth
            name="nick"
            component={ReduxFormTextField}
            label={intl.formatMessage({ id: 'app.forms.nick.label' })}
          />
        </Grid>
        <Grid item>
          <Field
            fullWidth
            name="linkText"
            component={ReduxFormTextField}
            label={intl.formatMessage({ id: 'app.forms.linkText.label' })}
          />
        </Grid>
        <Grid item>
          <Field
            fullWidth
            name="linkUrl"
            component={ReduxFormTextField}
            label={intl.formatMessage({ id: 'app.forms.linkUrl.label' })}
          />
        </Grid>
        <Grid className={classes.colorPickerContainer} item>
          <Field
            {...{ change }}
            fullWidth
            name="color"
            component={ReduxFormColorPickerField}
            label={intl.formatMessage({ id: 'app.forms.color.label' })}
          />
        </Grid>
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
            label={intl.formatMessage({ id: passwordLabelId })}
            type="password"
          />
        </Grid>
        <Grid item>
          <Field
            fullWidth
            name="passwordConfirm"
            component={ReduxFormTextField}
            label={intl.formatMessage({
              id: 'app.forms.confirmPassword.label',
            })}
            type="password"
          />
        </Grid>
      </DialogContent>
      <DialogActions>
        <NotYouButton
          className={classes.button}
          disabled={submitting}
          {...{ guest }}
          onClick={onLogoutClick}
        />
        <Grid item>
          <Button
            color="accent"
            className={classes.button}
            disabled={submitting}
            type="submit"
            raised
          >
            {intl.formatMessage({ id: 'app.forms.save' })}
          </Button>
        </Grid>
      </DialogActions>

      <ConfirmLogoutContainerModal />
    </form>
  )
}

SettingsForm.propTypes = propTypes

export default withStyles(styleSheet)(injectIntl(SettingsForm))
