import React from 'react'

import CSS from './CSS'

const MoveList = ({ boardHistory, clickHistory, step, descending, changeStep }) => {
  let moves = boardHistory.map((board, move) => {
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

export default MoveList
