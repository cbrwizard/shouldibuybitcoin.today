import { MESSAGES_URL } from 'client/constants/server'
import { fetchUrl, fetchJSON } from 'client/lib/fetch'

export const post = values =>
  fetchJSON(MESSAGES_URL, JSON.stringify(values), {
    method: 'POST',
  })
  .then(response =>
    response.json()
  )
  .catch((error) => {
    console.error(error)
    throw error
  })

export const index = () =>
  fetchUrl(MESSAGES_URL)
    .then(response =>
      response.json()
    )
    .catch((error) => {
      console.error(error)
      throw error
    })

