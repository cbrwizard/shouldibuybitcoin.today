import Vote from 'server/models/Vote'

export const create = (attributes) =>
  new Vote(attributes).save()
