import { GAME_SESSIONS_URL } from 'client/constants/server'
import {
  checkForFailedResponse,
  fetchJSON,
  fetchUrl,
  parseResponse,
} from 'client/lib/fetch'

export const postStart = values =>
  fetchJSON(GAME_SESSIONS_URL, JSON.stringify(values), {
    method: 'POST',
  })
  .then(checkForFailedResponse)
  .then(parseResponse)

export const index = () =>
  fetchUrl(GAME_SESSIONS_URL)
    .then(response =>
      response.json()
    )
    .catch((error) => {
      console.error(error)
      throw error
    })
