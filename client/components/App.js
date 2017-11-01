import React from 'react'
import { object } from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'

import Question from './Question'
import AnswerContainer from '../containers/today/AnswerContainer'

const propTypes = {
  classes: object.isRequired,
}

const styleSheet = {
  container: {
    textAlign: 'center',
    width: '100%',
  },
  question: {
    margin: '30px 0 0',
  },
}

/*
 * Is responsible for rendering the main components.
 */
const App = ({ classes }) => (
  <Grid className={classes.container} container direction="column">
    <Grid className={classes.question} item>
      <Question />
    </Grid>
    <Grid item>
      <AnswerContainer />
    </Grid>
  </Grid>
)

App.propTypes = propTypes

export default withStyles(styleSheet)(App)
