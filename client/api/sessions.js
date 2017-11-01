import { SESSIONS_URL } from 'client/constants/server'
import {
  checkForFailedResponse,
  fetchJSON,
  fetchUrl,
  parseResponse,
} from 'client/lib/fetch'

export const getIsLoggedIn = () =>
  fetchUrl(`${SESSIONS_URL}/`)
    .then(checkForFailedResponse)
    .then(parseResponse)

export const getSessionData = () =>
  fetchUrl(`${SESSIONS_URL}/data`)
    .then(checkForFailedResponse)
    .then(parseResponse)

export const postSignIn = values =>
  fetchJSON(SESSIONS_URL, JSON.stringify(values), { method: 'POST' })
    .then(checkForFailedResponse)
    .then(parseResponse)

export const deleteLogOut = () =>
  fetchUrl(SESSIONS_URL, { method: 'DELETE' })
    .then(checkForFailedResponse)
    .then(parseResponse)
