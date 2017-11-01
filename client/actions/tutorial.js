import {
  CHANGE_POSITION,
  INCREASE_STEP,
  FINISH_TUTORIAL,
  RESET_TUTORIAL,
} from 'client/constants/redux/tutorial'

/*
 * Is responsible for handling the interaction with a tutorial.
 */

export const finishTutorial = () => ({
  type: FINISH_TUTORIAL,
})

export const increaseStep = position => ({
  payload: position,
  type: INCREASE_STEP,
})

export const changePosition = position => ({
  meta: {
    throttle: 100,
  },
  payload: position,
  type: CHANGE_POSITION,
})

export const resetTutorial = () => ({
  type: RESET_TUTORIAL,
})
