import { connect } from 'react-redux'

import { fetchSessionData } from 'client/actions/sessions'
import App from 'client/components/App'

const mapStateToProps = state => ({
  isFetchingGameSession: state.app.game.isFetchingGameSession,
  isMaintenance: process.env.MAINTENANCE_MODE === 'true',
  started: state.app.game.started,
})

const mapDispatchToProps = dispatch => ({
  onLoad: () => {
    dispatch(fetchSessionData())
  },
})

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
