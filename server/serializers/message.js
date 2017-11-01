import { pick } from 'ramda'

const serializeMessage = message => pick(['text', 'createdAt', '_user'], message)

export default serializeMessage
