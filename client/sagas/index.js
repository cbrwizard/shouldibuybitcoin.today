import daySaga from 'client/sagas/daySaga'

export default function* () {
  yield [
    daySaga(),
  ]
}
