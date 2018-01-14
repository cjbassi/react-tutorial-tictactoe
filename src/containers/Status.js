import { connect } from 'react-redux'

import Status from '../components/Status'

const mapStateToProps = (state, ownProps) => {
  const { winningSquares } = state.game
  let winner = ''
  if (winningSquares) {
    const currentBoard = state.game.boardHistory[state.game.step]
    winner = currentBoard[winningSquares[0]]
  }
  return {
    xIsNext: state.game.xIsNext,
    winner,
  }
}

export default connect(
  mapStateToProps,
  null,
)(Status)
