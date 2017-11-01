import { combineReducers } from 'redux'

import gameReducer from 'client/reducers/gameReducer'
import greetingReducer from 'client/reducers/greetingReducer'
import modalsReducer from 'client/reducers/modalsReducer'
import messagesReducer from 'client/reducers/messagesReducer'
import sessionReducer from 'client/reducers/sessionReducer'
import territoriesReducer from 'client/reducers/territoriesReducer'
import tutorialReducer from 'client/reducers/tutorialReducer'

export default combineReducers({
  game: gameReducer,
  greeting: greetingReducer,
  messages: messagesReducer,
  modals: modalsReducer,
  session: sessionReducer,
  territories: territoriesReducer,
  tutorial: tutorialReducer,
})
