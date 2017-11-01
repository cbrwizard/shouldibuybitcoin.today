import fs from 'fs'

import { setFailedResponse } from 'server/lib/responses'

const get = async (ctx) => {
  try {
    return await new Promise((resolve, reject) => {
      fs.readFile('dist/index.html', 'utf8', (err, indexHtmlFile) => {
        if (err) {
          return reject(err)
        }

        ctx.body = indexHtmlFile
        return resolve()
      })
    })
  } catch (err) {
    return setFailedResponse(ctx, err)
  }
}

export default {
  get,
}
