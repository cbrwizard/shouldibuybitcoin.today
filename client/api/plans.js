import { PLANS_URL } from 'client/constants/server'
import {
  checkForFailedResponse,
  fetchJSON,
  parseResponse,
} from 'client/lib/fetch'

export const post = values =>
  fetchJSON(PLANS_URL, JSON.stringify(values), {
    method: 'POST',
  })
  .then(checkForFailedResponse)
  .then(parseResponse)
