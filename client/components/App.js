import React from 'react'
import { bool, func, object } from 'prop-types'
import { withStyles } from 'material-ui/styles'

const propTypes = {
  classes: object.isRequired,
  isFetchingGameSession: bool.isRequired,
  isMaintenance: bool,
  onLoad: func.isRequired,
  started: bool.isRequired,
}

const styleSheet = {
  container: {
    background: '#fff',
    width: '100%',
  },
}

const defaultProps = {
  isMaintenance: false,
}

/*
 * Is responsible for rendering the main components.
 * @note GameLoading is rendered with GameContainer when started so that
 * it shows up while the game is still loading.
 */
class App extends React.Component {
  componentDidMount() {
    this.props.onLoad()
  }

  render() {
    return (
      <main>
        wub wub
      </main>
    )
  }
}

App.propTypes = propTypes
App.defaultProps = defaultProps

export default withStyles(styleSheet)(App)
