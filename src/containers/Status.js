import { connect } from 'react-redux'

import Status from '../components/Status'

const mapStateToProps = (state, ownProps) => {
  return {
    xIsNext: state.game.xIsNext,
    winner: state.game.winner,
  }
}

export default connect(
  mapStateToProps,
)(Status)
