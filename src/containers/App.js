import { connect } from 'react-redux'

import App from '../components/App'
import { clickSquare, changeStep, toggleSort } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    descending: state.descending,
    boardHistory: state.game.boardHistory,
    clickHistory: state.game.clickHistory,
    step: state.game.step,
    xIsNext: state.game.xIsNext,
    winner: state.game.winner,
    winLine: state.game.winLine,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    clickSquare: (square) => {
      dispatch(clickSquare(square))
    },
    changeStep: (step) => {
      dispatch(changeStep(step))
    },
    toggleSort: () => {
      dispatch(toggleSort())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
