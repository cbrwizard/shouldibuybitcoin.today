import React from 'react'
import { bool, func } from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'
import Button from 'material-ui/Button'

const propTypes = {
  disabled: bool,
  intl: intlShape.isRequired,
  onClick: func.isRequired,
  positive: bool,
}
const defaultProps = {
  disabled: true,
  positive: false,
}

/*
* Is responsible for rendering a single vote button.
*/
const VoteButton = ({
  disabled, intl, onClick, positive,
}) => {
  const messageId = positive ? 'app.forms.vote.yes' : 'app.forms.vote.no'

  return (
    <Button {...{ disabled }} onClick={() => onClick(positive)}>
      {intl.formatMessage({ id: messageId })}
    </Button>
  )
}

VoteButton.propTypes = propTypes
VoteButton.defaultProps = defaultProps

export default injectIntl(VoteButton)
