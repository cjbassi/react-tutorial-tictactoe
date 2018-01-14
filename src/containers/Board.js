import { connect } from 'react-redux'

import Board from '../components/Board'

const mapStateToProps = (state, ownProps) => {
  return {
    currentBoard: state.game.boardHistory[state.game.step],
  }
}

export default connect(
  mapStateToProps,
)(Board)
