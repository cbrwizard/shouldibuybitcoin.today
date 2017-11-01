// import { findById } from 'server/queries/users'
// import customSerialize from 'server/serializers/user'

/*
 * Contains functions related to passport user serialization.
 * TODO: possibly do it more securely.
 */

export const serializeUser = (user, done) => {
  done(null, user._id)
}

export const deserializeUser = async (id, done) => {
  const user = await findById(id)
  const serialized = await customSerialize(user)
  return done(null, serialized)
}
