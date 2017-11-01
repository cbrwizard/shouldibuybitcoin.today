import isObjectMongoose from 'server/lib/mongoose/isObjectMongoose'

/**
 * Is responsible for returning a plain object from a possible candidate,
 * which could also be a Mongoose model.
 */
const ensurePlainObject = candidate => (
   isObjectMongoose(candidate) ? candidate.toObject() : candidate
)

export default ensurePlainObject
