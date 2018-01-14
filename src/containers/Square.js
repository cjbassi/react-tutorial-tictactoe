import { connect } from 'react-redux'

import Square from '../components/Square'
import { clickSquare } from '../actions'

const matchStateToProps = (state, ownProps) => {
  const currentBoard = state.game.boardHistory[state.game.step]
  const { winningSquares } = state.game
  return {
    content: currentBoard[ownProps.id],
    winningSquare: winningSquares ? winningSquares.includes(ownProps.id) : false
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    clickSquare: () => {
      dispatch(clickSquare(ownProps.id))
    },
  }
}

export default connect(
  matchStateToProps,
  mapDispatchToProps,
)(Square)
