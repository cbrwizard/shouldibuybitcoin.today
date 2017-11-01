import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import React from 'react'
import { bool, func, string } from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'

const propTypes = {
  className: string.isRequired,
  guest: bool.isRequired,
  intl: intlShape.isRequired,
  onClick: func.isRequired,
}

/**
 * Is responsible for rendering the logout button.
 */
const NotYouButton = ({ className, guest, intl, onClick }) => (
  <Grid item>
    <Button {...{ className }} onClick={() => onClick(guest)} >
      {intl.formatMessage({ id: 'app.links.notYou' })}
    </Button>
  </Grid>
)

NotYouButton.propTypes = propTypes

export default injectIntl(NotYouButton)
