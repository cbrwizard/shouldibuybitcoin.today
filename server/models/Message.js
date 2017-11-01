import timestamps from 'mongoose-timestamp'
import sanitizerPlugin from 'mongoose-sanitizer'

import getMongoose from 'server/lib/getMongoose'

const { mongoose, db } = getMongoose()
const { Schema } = mongoose
const ObjectId = Schema.Types.ObjectId

const messageSchema = new Schema({
  _user: {
    ref: 'User',
    required: true,
    type: ObjectId,
  },
  text: {
    minlength: 2,
    required: true,
    type: String,
  },
})

messageSchema.plugin(timestamps)
messageSchema.plugin(sanitizerPlugin)

const Message = db.model('Message', messageSchema)

export default Message
