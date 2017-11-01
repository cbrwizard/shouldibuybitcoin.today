import timestamps from 'mongoose-timestamp'

import getMongoose from 'server/lib/getMongoose'

const { mongoose, db } = getMongoose()
const { Schema } = mongoose

const voteSchema = new Schema({
  noCount: {
    default: 0,
    required: true,
    type: Number,
  },
  shouldBuy: {
    default: false,
    required: true,
    type: Boolean,
  },
  startDate: {
    default: () => {
      const start = new Date()
      start.setUTCHours(0, 0, 0, 0)
      return start
    },
    required: true,
    type: Date,
  },
  yesCount: {
    default: 0,
    required: true,
    type: Number,
  },
})

voteSchema.plugin(timestamps)

const Vote = db.model('Vote', voteSchema)

export default Vote
