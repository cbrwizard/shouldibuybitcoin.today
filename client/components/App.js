import React from 'react'
import { object } from 'prop-types'
import { withStyles } from 'material-ui/styles'

import Question from './Question'
import AnswerContainer from '../containers/today/AnswerContainer'

const propTypes = {
  classes: object.isRequired,
}

const styleSheet = {
  container: {
    background: '#333',
    width: '100%',
  },
}

/*
 * Is responsible for rendering the main components.
 */
const App = ({ classes }) => (
  <main className={classes.container} >
    <Question />
    <AnswerContainer />
  </main>
)

App.propTypes = propTypes

export default withStyles(styleSheet)(App)
