import messagesSaga from 'client/sagas/messagesSaga'
import sessionsSaga from 'client/sagas/sessionsSaga'

export default function* () {
  yield [
    messagesSaga(),
    sessionsSaga(),
  ]
}
