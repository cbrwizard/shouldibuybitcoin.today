import React from 'react'
import { bool, func } from 'prop-types'
import Grid from 'material-ui/Grid'

import VoteButton from './VoteButton'

const propTypes = {
  canVoteToday: bool.isRequired,
  onVoteClick: func.isRequired,
}

/*
* Is responsible for rendering the vote buttons together.
*/
const VoteButtons = ({ canVoteToday, onVoteClick }) => (
  <Grid container direction="column">
    <Grid item>
      <VoteButton disabled={!canVoteToday} onClick={onVoteClick} positive />
    </Grid>
    <Grid item>
      <VoteButton disabled={!canVoteToday} onClick={onVoteClick} />
    </Grid>
  </Grid>
)

VoteButtons.propTypes = propTypes

export default VoteButtons
