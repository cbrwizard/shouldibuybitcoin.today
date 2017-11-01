import { pick } from 'ramda'

const serializeDay = day => pick(['noCount', 'shouldBuy', 'yesCount'], day)

export default serializeDay
