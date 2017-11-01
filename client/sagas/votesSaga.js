import { call, put, takeLatest } from 'redux-saga/effects'

import { CREATE } from 'client/constants/redux/votes'
import { post } from 'client/api/votes'
import { setDay } from 'client/actions/day'
import setUpRavenClient from 'client/lib/setUpRavenClient'

const Raven = setUpRavenClient()

function* create(action) {
  try {
    const response = yield call(post, { shouldBuy: action.payload })
    yield put(setDay(response.day))
  } catch (error) {
    Raven.captureException(error)
  }
}

function* votesSaga() {
  yield takeLatest(CREATE, create)
}

export default votesSaga
