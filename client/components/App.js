import React from 'react'
import { object } from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'

import Question from './Question'
import Credits from './Credits'
import BitcoinWidget from './today/BitcoinWidget'
import AnswerContainer from '../containers/today/AnswerContainer'
import { MOBILE_WIDTH } from '../constants/styling'

const propTypes = {
  classes: object.isRequired,
}

const styleSheet = {
  answer: {
    flex: 1,
  },
  container: {
    margin: 0,
    minHeight: '100vh',
    textAlign: 'center',
    width: '100%',
  },
  credits: {
    margin: '25px 0 10px',
  },
  question: {
    [`@media only screen and (max-width: ${MOBILE_WIDTH}px)`]: {
      margin: '10px 0 0',
    },
    margin: '30px 0 0',
  },
}

/*
 * Is responsible for rendering the main components.
 * TODO: make it look good on horizontal phones.
 */
const App = ({ classes }) => (
  <Grid className={classes.container} container direction="column">
    <BitcoinWidget />
    <Grid className={classes.question} component="header" item>
      <Question />
    </Grid>
    <Grid className={classes.answer} item>
      <AnswerContainer />
    </Grid>
    <Grid component="footer" className={classes.credits}>
      <Credits />
    </Grid>
  </Grid>
)

App.propTypes = propTypes

export default withStyles(styleSheet)(App)
