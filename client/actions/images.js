import { UPDATE } from 'client/constants/redux/images'

/*
 * Is responsible for handling the interaction with images.
 */
export const update = values => (
  {
    payload: values,
    type: UPDATE,
  }
)
