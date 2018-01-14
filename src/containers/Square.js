import { connect } from 'react-redux'

import Square from '../components/Square'
import { clickSquare } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    winner: state.game.winner,
    winLine: state.game.winLine,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    clickSquare: (square) => {
      dispatch(clickSquare(square))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Square)
