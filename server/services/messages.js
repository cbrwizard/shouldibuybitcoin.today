// import { all, create } from 'server/queries/messages'
// import setUpRavenClient from 'server/lib/setUpRavenClient'
// import broadcastSetMessages from 'server/broadcasts/broadcastSetMessages'
// import getLogger from 'server/lib/getLogger'
//
// const logger = getLogger()
// const Raven = setUpRavenClient()
//
// export const createMessage = async (attributes, io) => {
//   try {
//     const saveResult = await create(attributes)
//     logger.info({ attributes }, 'Created a message')
//
//     if (io) { await broadcastSetMessages(io, await all()) }
//
//     return saveResult
//   } catch (err) {
//     Raven.captureException(err)
//     logger.error({ err, stack: err.stack })
//     throw err
//   }
// }
