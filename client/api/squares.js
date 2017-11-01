import { SQUARES_URL } from 'client/constants/server'
import {
  checkForFailedResponse,
  fetchJSON,
  fetchUrl,
  parseResponse,
} from 'client/lib/fetch'

export const index = () =>
  fetchUrl(SQUARES_URL)
    .then(response =>
      response.json()
    )
    .catch((error) => {
      console.error(error)
      throw error
    })

export const putUpdate = (id, values) =>
  fetchJSON(`${SQUARES_URL}/${id}`, JSON.stringify(values), {
    method: 'PUT',
  })
  .then(checkForFailedResponse)
  .then(parseResponse)
