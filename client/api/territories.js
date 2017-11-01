import { TERRITORIES_URL } from 'client/constants/server'
import { fetchUrl } from 'client/lib/fetch'

export const current = () =>
  fetchUrl(`${TERRITORIES_URL}/current`)
    .then(response => response.json())
    .catch((error) => {
      console.error(error)
      throw error
    })

export const others = () =>
  fetchUrl(`${TERRITORIES_URL}/others`)
    .then(response => response.json())
    .catch((error) => {
      console.error(error)
      throw error
    })
