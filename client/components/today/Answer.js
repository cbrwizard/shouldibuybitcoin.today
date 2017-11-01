import React from 'react'
import { func, object } from 'prop-types'

import SingleWord from './SingleWord'

const propTypes = {
  day: object.isRequired,
  onLoad: func.isRequired,
}

/*
* Is responsible for rendering the main answer components.
*/
class Answer extends React.Component {
  componentDidMount() {
    this.props.onLoad()
  }

  render() {
    const { day } = this.props
    return (
      <div>
        <SingleWord shouldBuy={day.record.shouldBuy} />
      </div>
    )
  }
}

Answer.propTypes = propTypes

export default Answer
