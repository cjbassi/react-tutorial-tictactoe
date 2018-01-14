import React from 'react'

import * as CSS from './CSS'

import Board from '../Board'
import MoveList from '../MoveList'
import SortButton from '../SortButton'
import Status from '../Status'

const App = ({ descending, boardHistory, clickHistory, step, xIsNext, winner, winLine, clickSquare, changeStep, toggleSort }) => {
  const currentBoard = boardHistory[step]
  return (
    <CSS.Game>
      <div>
        <Board
          winLine={winLine}
          squares={currentBoard}
          onClick={clickSquare}
        />
        <MoveList
          history={boardHistory}
          descending={descending}
          stepNumber={step}
          jumpTo={changeStep}
          cellClicked={clickHistory}
        />
      </div>
      <CSS.GameInfo>
        <Status
          winner={winner}
          xIsNext={xIsNext}
        />
        <SortButton
          descending={descending}
          toggleSort={toggleSort}
        />
      </CSS.GameInfo>
    </CSS.Game>
  )
}

export default App
