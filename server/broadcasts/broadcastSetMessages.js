// TODO: this shouldn't be in client anymore duh.
import { SET_MESSAGES } from 'client/constants/redux/messages'
import broadcast from 'server/broadcasts/broadcast'

/**
 * Is responsible for broadcasting all messages.
 */
const broadcastSetMessages = async (io, messages) =>
  broadcast(io, messages, SET_MESSAGES)

export default broadcastSetMessages
