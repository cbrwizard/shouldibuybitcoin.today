import React from 'react'
import { func, object } from 'prop-types'

import SingleWord from './SingleWord'
import VoteButtons from './VoteButtons'

const propTypes = {
  day: object.isRequired,
  onLoad: func.isRequired,
  onVoteClick: func.isRequired,
}

/*
* Is responsible for rendering the main answer components.
*/
class Answer extends React.Component {
  componentDidMount() {
    this.props.onLoad()
  }

  render() {
    const { day, onVoteClick } = this.props

    return (
      <div>
        <SingleWord shouldBuy={day.record.yesCount >= day.record.noCount} />
        <VoteButtons canVoteToday={day.canVoteToday} {...{ onVoteClick }} />
      </div>
    )
  }
}

Answer.propTypes = propTypes

export default Answer
