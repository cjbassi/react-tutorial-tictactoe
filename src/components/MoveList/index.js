import * as React from 'react'
import PropTypes from 'prop-types'
import * as _ from 'lodash'

import CSS from './CSS'

const MoveList = (props) => {
  const { moveCount, clickHistory, step, descending, changeStep } = props
  let moves = _.range(moveCount).map((move) => {
    const desc = (move)
      ? `Go to move #${move} (${clickHistory[move - 1]})`
      : 'Go to game start'
    return (
      <li key={move}>
        <button onClick={() => changeStep(move)}>
          {move === step ? <b>{desc}</b> : desc}
        </button>
      </li>
    )
  })
  if (!descending) {
    moves = moves.reverse()
  }
  return (
    <CSS>
      {moves}
    </CSS>
  )
}

MoveList.propTypes = {
  moveCount: PropTypes.number.isRequired,
  clickHistory: PropTypes.arrayOf(PropTypes.number).isRequired,
  step: PropTypes.number.isRequired,
  descending: PropTypes.bool.isRequired,
  changeStep: PropTypes.func.isRequired,
}

export default MoveList
