import Day from 'server/models/Day'

export const lastDay = () =>
  Day.findOne({})
    .sort({ createdAt: -1 })
    .lean()
    .exec()

export const create = () =>
  new Day().save()
