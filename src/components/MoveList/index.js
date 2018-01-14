import React from 'react'

import CSS from './CSS'

const MoveList = ({ history, descending, stepNumber, jumpTo, cellClicked }) => {
  let moves = history.map((board, move) => {
    const desc = (move)
      ? `Go to move #${move} (${cellClicked[move - 1]})`
      : 'Go to game start'
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>
          {move === stepNumber ? <b>{desc}</b> : desc}
        </button>
      </li>
    )
  })
  if (!descending) {
    moves = moves.reverse()
  }
  return (
    <CSS>{moves}</CSS>
  )
}

export default MoveList
