import kue from 'kue'

/**
 * Is responsible for returning a configured Kue's Queue singleton.
 */
const getQueue = () =>
  kue.createQueue({
    redis: {
      host: process.env.REDIS_HOST,
    },
  })

export default getQueue
