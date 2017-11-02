import React from 'react'
import { object } from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'

import Question from './Question'
import Credits from './Credits'
import AnswerContainer from '../containers/today/AnswerContainer'

const propTypes = {
  classes: object.isRequired,
}

const styleSheet = {
  container: {
    margin: 0,
    textAlign: 'center',
    width: '100%',
  },
  credits: {
    margin: '0 0 10px',
  },
  question: {
    margin: '30px 0 0',
  },
}

/*
 * Is responsible for rendering the main components.
 * TODO: make it look good on horizontal phones.
 */
const App = ({ classes }) => (
  <Grid className={classes.container} container direction="column">
    <Grid className={classes.question} item>
      <Question />
    </Grid>
    <Grid item>
      <AnswerContainer />
    </Grid>
    <div className={`${classes.credits} h-position-bottom-center`}>
      <Credits />
    </div>
  </Grid>
)

App.propTypes = propTypes

export default withStyles(styleSheet)(App)
