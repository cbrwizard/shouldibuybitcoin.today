import React from 'react'
import { bool, object, string } from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { injectIntl, intlShape } from 'react-intl'
import Typography from 'material-ui/Typography'

const propTypes = {
  canVoteToday: bool.isRequired,
  classes: object.isRequired,
  intl: intlShape.isRequired,
  isLoading: bool.isRequired,
  percentVoted: string.isRequired,
  shouldBuy: bool.isRequired,
}
const styleSheet = {
  join: {
    color: '#fff',
    margin: '10px 0 0',
  },
  note: {
    color: '#ccc',
  },
  text: {
    color: '#fff',
    fontSize: '14rem',
    margin: '-35px 0 35px',
  },
}

/*
* Is responsible for rendering the answer in a form of a single word.
* TODO: rename.
*/
const SingleWord = ({
  canVoteToday,
  classes,
  intl,
  isLoading,
  percentVoted,
  shouldBuy,
}) => {
  let messageId
  if (isLoading) {
    messageId = 'app.text.answer.singleWord.unknown'
  } else if (shouldBuy) {
    messageId = 'app.text.answer.singleWord.yes'
  } else {
    messageId = 'app.text.answer.singleWord.no'
  }

  const voteTooMessageId = canVoteToday
    ? 'app.text.answer.voteToo'
    : 'app.text.answer.voteTomorrow'
  return (
    <div>
      <Typography className={classes.text} type="display4">
        {intl.formatMessage({ id: messageId })}
      </Typography>
      {!isLoading && (
        <div>
          <Typography className={classes.note} type="subheading">
            {intl.formatMessage(
              {
                id: 'app.text.answer.webVoted',
              },
              {
                percentVoted,
              }
            )}
          </Typography>
          <Typography className={classes.join} type="subheading">
            {intl.formatMessage({ id: voteTooMessageId })}
          </Typography>
        </div>
      )}
    </div>
  )
}

SingleWord.propTypes = propTypes

export default withStyles(styleSheet)(injectIntl(SingleWord))
