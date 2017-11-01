// import getQueue from 'server/lib/getQueue'
// import { PERFORM_PLAN } from 'server/constants/jobTypes'
// import { io } from 'server/app'
// // import broadcastProcessOperation
// //   from 'server/broadcasts/broadcastProcessOperation'
// import { performPlan } from 'server/services/plans'
// import serializeOperation from 'server/serializers/operation'
// import setUpRavenClient from 'server/lib/setUpRavenClient'
// import getLogger from 'server/lib/getLogger'
//
// const logger = getLogger()
// const Raven = setUpRavenClient()
// const queue = getQueue()
//
// /**
//  * Is responsible for handling the performPlan job processing.
//  */
// const processPerformPlan = async () =>
//   queue.process(PERFORM_PLAN, async (job, done) => {
//     try {
//       const operation = await performPlan(
//         job.data.userId,
//         job.data.selectedSquaresPositions
//       )
//       broadcastProcessOperation(io, await serializeOperation(operation))
//
//       done()
//     } catch (err) {
//       Raven.captureException(err)
//       logger.error({ err, stack: err.stack })
//       done(err)
//     }
//   })
//
// export default processPerformPlan
