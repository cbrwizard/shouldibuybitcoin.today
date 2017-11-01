import adaptMongooseErrorToReduxForm from 'server/lib/adaptMongooseErrorToReduxForm'

/**
 * Provides helper methods for controllers for different action results.
 */

export const setSuccessResponse = (ctx) => {
  ctx.status = 200
}

export const setSuccessNoContentResponse = (ctx) => {
  ctx.status = 205
}

export const setCreatedResponse = (ctx, saveResult) => {
  ctx.status = 201
  ctx.body = { id: saveResult.id }
}

export const setUpdatedResponse = (ctx) => {
  ctx.status = 204
}

export const setUnauthorizedResponse = (ctx) => {
  ctx.status = 401
  ctx.body = {
    details: {
      email: 'email or password is wrong',
      password: 'email or password is wrong',
    },
    type: 'Unauthorized',
  }
}

export const setFailedResponse = (ctx, err = {}) => {
  if (err.name === 'ValidationError') {
    ctx.status = 422
    ctx.body = {
      details: adaptMongooseErrorToReduxForm(err.errors),
      type: err.name,
    }
  } else {
    ctx.status = 500
    ctx.body = { type: 'Unknown' }
    ctx.app.emit('error', err, ctx)
  }
}
