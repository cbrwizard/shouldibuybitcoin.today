import Message from 'server/models/Message'

export const all = () =>
  Message.find({})
    .sort({ createdAt: -1 })
    .populate('_user', 'color nick')
    .limit(100)
    .lean()
    .exec()

export const create = attributes =>
  new Message(attributes).save()
