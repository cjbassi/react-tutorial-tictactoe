import { connect } from 'react-redux'

import MoveList from '../components/MoveList'
import { changeStep } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    moveCount: state.game.boardHistory.length,
    clickHistory: state.game.clickHistory,
    step: state.game.step,
    descending: state.descending,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeStep: (step) => {
      dispatch(changeStep(step))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoveList)
