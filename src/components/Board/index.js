import React from 'react'

import CSS from './CSS'
import Square from '../../containers/Square'

const Board = ({ currentBoard }) => {
  let row = []
  let cells = []
  let cellNumber = 0
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      row.push (
        <Square
          key={cellNumber}
          id={cellNumber}
          content={currentBoard[cellNumber]}
        />
      )
      cellNumber++
    }
    cells.push(<CSS key={i}>{row}</CSS>)
    row = []
  }
  return (
    <div>
      {cells}
    </div>
  )
}

export default Board
