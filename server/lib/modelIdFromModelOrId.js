import { ObjectID } from 'mongodb'

/**
 * Is responsible for returning a model id from either a model record or an id.
 * Does not necessarily return a string.
 */
const modelIdFromModelOrId = (modelOrModelId) => {
  const modelId = ObjectID.isValid(modelOrModelId) ? modelOrModelId : modelOrModelId._id
  return modelId
}

export default modelIdFromModelOrId
