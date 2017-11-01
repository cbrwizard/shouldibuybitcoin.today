import passport from 'koa-passport'
import { setFailedResponse, setSuccessResponse, setSuccessNoContentResponse, setUnauthorizedResponse } from 'server/lib/responses'
// import serializeUser from 'server/serializers/user'
// import { findById } from 'server/queries/users'

const get = async (ctx) => {
  try {
    ctx.body = { isLoggedIn: ctx.isAuthenticated() }
  } catch (err) {
    setFailedResponse(ctx, err)
  }
}

const getSessionData = async (ctx) => {
  try {
    let user = null
    if (ctx.isAuthenticated()) {
      const updatedUser = await findById(ctx.state.user._id)
      user = await serializeUser(updatedUser)
    }

    ctx.body = {
      isLoggedIn: ctx.isAuthenticated(),
      user,
    }
  } catch (err) {
    setFailedResponse(ctx, err)
  }
}

const post = async (ctx, next) => {
  try {
    return passport.authenticate('local', (err, user) => {
      if (user) {
        setSuccessResponse(ctx)
        return ctx.login(user)
      }
      return setUnauthorizedResponse(ctx)
    })(ctx, next)
  } catch (err) {
    return setFailedResponse(ctx, err)
  }
}

const del = async (ctx) => {
  try {
    ctx.logout()
    return setSuccessNoContentResponse(ctx)
  } catch (err) {
    return setFailedResponse(ctx, err)
  }
}

export default {
  del,
  get,
  getSessionData,
  post,
}
