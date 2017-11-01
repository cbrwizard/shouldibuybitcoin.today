import { call, put, takeLatest } from 'redux-saga/effects'
import { reset, stopSubmit } from 'redux-form'
import { isEmpty } from 'ramda'

import { FETCH_ALL, SEND } from 'client/constants/redux/messages'
import { index, post } from 'client/api/messages'
import { setIsLoading, setMessages } from 'client/actions/messages'
import { MESSAGE_FORM } from 'client/constants/forms'
import setUpRavenClient from 'client/lib/setUpRavenClient'

const Raven = setUpRavenClient()

/*
 * Is responsible for sending a message, handling loading and resetting
 * the form afterwards.
 */
function* send(action) {
  try {
    if (isEmpty(action.payload)) return

    yield put(setIsLoading(true))
    yield call(post, action.payload)
    yield put(reset(MESSAGE_FORM))
  } catch (error) {
    Raven.captureException(error)
    yield put(stopSubmit(MESSAGE_FORM, error.details))
  } finally {
    yield put(setIsLoading(false))
  }
}

function* fetchAll() {
  try {
    yield put(setIsLoading(true))
    const response = yield call(index)
    yield put(setMessages(response.messages))
  } catch (error) {
    Raven.captureException(error)
  } finally {
    yield put(setIsLoading(false))
  }
}

function* messagesSaga() {
  yield takeLatest(FETCH_ALL, fetchAll)
  yield takeLatest(SEND, send)
}

export default messagesSaga
