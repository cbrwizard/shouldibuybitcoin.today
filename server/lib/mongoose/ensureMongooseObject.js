import isObjectMongoose from 'server/lib/mongoose/isObjectMongoose'

/**
 * Is responsible for returning a plain object from a possible candidate,
 * which could also be a Mongoose model.
 */
const ensureMongooseObject = (candidate, model) => {
  if (isObjectMongoose(candidate)) {
    return candidate.toObject()
  }

  return model.findOne({ _id: candidate._id })
}

export default ensureMongooseObject
