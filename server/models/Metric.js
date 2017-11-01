import timestamps from 'mongoose-timestamp'

import getMongoose from 'server/lib/getMongoose'
import {
  CLICKED_BECOME_PATREON,
  CORE_GAMEPLAY_ACCEPTANCE,
  GAME_SESSION_STARTED,
  SQUARE_CAPTURED,
  SECOND_TURN_MADE,
  THIRD_TURN_MADE,
  FIFTH_TURN_MADE,
  EIGHTH_TURN_MADE,
} from 'server/constants/metricNames'
import { SUCCEEDED } from 'server/constants/metricStatuses'

const { mongoose, db } = getMongoose()
const { Schema } = mongoose
const ObjectId = Schema.Types.ObjectId

// @note in the future if we want to redo the measurements we might want
// to introduce a Bool field 'active', switch to false all past measurements
// and filter doesMetricExistForUser only for active === true ones.
const metricSchema = new Schema({
  _user: {
    ref: 'User',
    required: true,
    type: ObjectId,
  },
  name: {
    enum: [
      CLICKED_BECOME_PATREON,
      CORE_GAMEPLAY_ACCEPTANCE,
      GAME_SESSION_STARTED,
      SQUARE_CAPTURED,
      SECOND_TURN_MADE,
      THIRD_TURN_MADE,
      FIFTH_TURN_MADE,
      EIGHTH_TURN_MADE,
    ],
    required: true,
    type: String,
  },
  status: {
    default: SUCCEEDED,
    enum: [SUCCEEDED],
    required: true,
    type: String,
  },
})

metricSchema.plugin(timestamps)

const Metric = db.model('Metric', metricSchema)

export default Metric
