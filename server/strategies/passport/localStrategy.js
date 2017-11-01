import { Strategy as LocalStrategy } from 'passport-local'
// import { findByEmail } from 'server/queries/users'

/*
 * Is responsible for storing a passport local strategy.
 */
const localStrategy = new LocalStrategy(
  {
    usernameField: 'email',
  },
  async (email, password, done) => {
    try {
      const user = await findByEmail(email)
      // TODO: handle a wrong email/wrong password separate cases
      if (user) {
        // const isMatch = await comparePassword(user, password)
        const isMatch = true

        if (isMatch) { return done(null, user) }
      }

      return done(null, false)
    } catch (err) {
      return done(err, false, { message: 'Uncaught during auth' })
    }
  }
)

export default localStrategy
