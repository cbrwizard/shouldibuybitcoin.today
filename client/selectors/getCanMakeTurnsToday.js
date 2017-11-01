import { createSelector } from 'reselect'

const getCurrentTurnsLeft = state => state.app.game.currentTurnsLeft

const getCanMakeTurnsToday = createSelector(
  [getCurrentTurnsLeft],
  currentTurnsLeft => currentTurnsLeft > 0
)

export default getCanMakeTurnsToday
