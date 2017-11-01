import React from 'react'
import { func } from 'prop-types'
import Grid from 'material-ui/Grid'

import VoteButton from './VoteButton'

const propTypes = {
  onVoteClick: func.isRequired,
}

/*
* Is responsible for rendering the vote buttons together.
*/
const VoteButtons = ({ onVoteClick }) => (
  <Grid container direction="column">
    <Grid item>
      <VoteButton onClick={onVoteClick} positive />
    </Grid>
    <Grid item>
      <VoteButton onClick={onVoteClick} />
    </Grid>
  </Grid>

)

VoteButtons.propTypes = propTypes

export default VoteButtons
