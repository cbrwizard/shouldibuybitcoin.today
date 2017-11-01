import { connect } from 'react-redux'

import { fetch } from 'client/actions/day'
import Answer from '../../components/today/Answer'

const mapStateToProps = state => ({
  day: state.app.day,
})

const mapDispatchToProps = dispatch => ({
  onLoad: () => {
    dispatch(fetch())
  },
})

const AnswerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Answer)

export default AnswerContainer
