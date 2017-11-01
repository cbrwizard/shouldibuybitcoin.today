import { USER_URL, USERS_URL } from 'client/constants/server'
import {
  checkForFailedResponse,
  fetchJSON,
  parseResponse,
} from 'client/lib/fetch'

export const postSignUp = values =>
  fetchJSON(USERS_URL, JSON.stringify(values), {
    method: 'POST',
  })
  .then(checkForFailedResponse)
  .then(parseResponse)

export const putUpdate = (id, values) =>
  fetchJSON(`${USER_URL}/${id}`, JSON.stringify(values), {
    method: 'PUT',
  })
  .then(checkForFailedResponse)
  .then(parseResponse)
