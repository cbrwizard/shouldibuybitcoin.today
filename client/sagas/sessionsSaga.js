import { call, put, takeLatest } from 'redux-saga/effects'
import { pick } from 'ramda'
import { stopSubmit } from 'redux-form'
import { actions as toastrActions } from 'react-redux-toastr'

import {
  setStarted,
  resetGame,
} from 'client/actions/game'
import translate from 'client/lib/translate'
import {
  FETCH_IS_LOGGED_IN,
  FETCH_SESSION_DATA,
  LOG_OUT,
  SIGN_IN,
} from 'client/constants/redux/sessions'
import { setIsLoading } from 'client/actions/greeting'
import { LOGIN_FORM } from 'client/constants/forms'
import { LOGIN_MODAL, SETTINGS_MODAL } from 'client/constants/modals'
import {
  clearUser,
  fetchSessionData,
  setIsLoggedIn,
  setUser,
} from 'client/actions/sessions'
import { closeModal } from 'client/actions/lib/modals'
import {
  deleteLogOut,
  getIsLoggedIn,
  getSessionData,
  postSignIn,
} from 'client/api/sessions'
import setUpRavenClient from 'client/lib/setUpRavenClient'
import { resetTutorial } from '../actions/tutorial'

const Raven = setUpRavenClient()

const PERMITTED_LOGIN_KEYS = ['email', 'password']

function* handleFetchIsLoggedIn() {
  try {
    const response = yield call(getIsLoggedIn)
    yield put(setIsLoggedIn(response.isLoggedIn))
  } catch (error) {
    Raven.captureException(error)
    if (!error.details) {
      console.error(error)
    }
  }
}

function* handleFetchSessionData() {
  try {
    const response = yield call(getSessionData)
    yield put(setUser(response.user))
    yield put(setIsLoggedIn(response.isLoggedIn))
    yield put(setIsLoading(false))
  } catch (error) {
    Raven.captureException(error)
    if (!error.details) {
      console.error(error)
    }
  }
}

function* handleSignIn(action) {
  try {
    const filteredValues = pick(PERMITTED_LOGIN_KEYS, action.payload)
    yield call(postSignIn, filteredValues)
    yield put(closeModal(LOGIN_MODAL))
    yield put(fetchSessionData())
    yield put(
      toastrActions.add({
        position: 'top-right',
        title: translate('app.notifications.login.success'),
        type: 'success',
      })
    )
  } catch (error) {
    Raven.captureException(error)
    yield put(stopSubmit(LOGIN_FORM, error.details))
    if (!error.details) {
      console.error(error)
    }
  }
}

function* handleLogOut() {
  try {
    yield call(deleteLogOut)
    yield put(fetchSessionData())
    yield put(closeModal(SETTINGS_MODAL))
    yield put(
      toastrActions.add({
        position: 'top-right',
        title: translate('app.notifications.logout.success'),
        type: 'info',
      })
    )
    yield put(clearUser())
    yield put(setStarted(false))
    yield put(resetGame())
    yield put(resetTutorial())
  } catch (error) {
    Raven.captureException(error)
    yield put(
      toastrActions.add({
        position: 'top-right',
        title: translate('app.notifications.logout.error'),
        type: 'error',
      })
    )
    if (!error.details) {
      console.error(error)
    }
  }
}

function* usersSaga() {
  yield takeLatest(FETCH_IS_LOGGED_IN, handleFetchIsLoggedIn)
  yield takeLatest(FETCH_SESSION_DATA, handleFetchSessionData)
  yield takeLatest(LOG_OUT, handleLogOut)
  yield takeLatest(SIGN_IN, handleSignIn)
}

export default usersSaga
