/**
 * Is responsible for telling if a passed object is a Mongoose object.
 */
const isObjectMongoose = object => (
  object.constructor.name === 'model'
)

export default isObjectMongoose
