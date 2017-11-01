import { connect } from 'react-redux'
import { isEmpty } from 'ramda'

import { fetch } from 'client/actions/day'
import { create } from 'client/actions/votes'
import Answer from '../../components/today/Answer'

const mapStateToProps = (state) => {
  const { day } = state.app
  let percentVoted = null
  if (!isEmpty(state.app.day)) {
    const { noCount, yesCount } = day.record
    const sum = noCount + yesCount
    percentVoted = (Math.max(noCount, yesCount) / sum * 100).toFixed(2)
  }

  return {
    day,
    percentVoted,
  }
}

const mapDispatchToProps = dispatch => ({
  onLoad: () => {
    dispatch(fetch())
  },
  onVoteClick: (shouldBuy) => {
    dispatch(create(shouldBuy))
  },
})

const AnswerContainer = connect(mapStateToProps, mapDispatchToProps)(Answer)

export default AnswerContainer
