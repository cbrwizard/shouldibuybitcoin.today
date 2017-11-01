import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import createSocketIoMiddleware from 'redux-socket.io'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { intlReducer } from 'react-intl-redux'
import { reducer as toastrReducer } from 'react-redux-toastr'
import io from 'socket.io-client'
import createRavenMiddleware from 'raven-for-redux'

import { SOCKET_IO_ACTION_PREFIX } from 'client/constants/websockets'
import rootSaga from 'client/sagas'
import rootReducer from 'client/reducers'
import intl from 'client/locales/en'
import setUpRavenClient from 'client/lib/setUpRavenClient'

const socket = io(process.env.API_BASE)
const socketIoMiddleware = createSocketIoMiddleware(
  socket,
  SOCKET_IO_ACTION_PREFIX
)

const sagaMiddleware = createSagaMiddleware({
  onError: error => console.error('UNCAUGHT ERROR IN SAGAS: ', error),
})

const ravenMiddleware = createRavenMiddleware(setUpRavenClient())
// Enables chrome dev tool
const devTools = typeof window !== 'undefined' && window.devToolsExtension
  ? window.devToolsExtension()
  : f => f

const middlewares = [
  sagaMiddleware,
  socketIoMiddleware,
  ravenMiddleware,
]

if (process.env.NODE_ENV !== 'production') {
  const loggerMiddleware = createLogger({
    collapsed: true,
  })
  // Must always go last
  middlewares.push(loggerMiddleware)
}

const createStoreWithMiddleware = compose(
  applyMiddleware(...middlewares),
  devTools
)(createStore)

const combinedReducer = combineReducers({
  app: rootReducer,
  form: formReducer,
  intl: intlReducer,
  toastr: toastrReducer,
})

let preloadedState

if (typeof window !== 'undefined') {
  preloadedState = window.__PRELOADED_STATE__
  delete window.__PRELOADED_STATE__
}

const store = createStoreWithMiddleware(combinedReducer, {
  intl,
  ...preloadedState,
})
sagaMiddleware.run(rootSaga)

export default store
