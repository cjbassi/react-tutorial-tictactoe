import React from 'react'

import * as CSS from './CSS'

import Board from '../Board'
import MoveList from '../MoveList'
import SortButton from '../SortButton'
import Status from '../Status'

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a], lines[i]]
    }
  }
  return [null, Array(3).fill(null)]
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [{
          squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true,
      cellClicked: [
        null
      ],
      descending: true,
      winLine: Array(3).fill(null)
    }
  }

  handleClick = (i) => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length - 1]
    const squares = current.squares.slice()
    if (calculateWinner(squares)[0] || squares[i]) {
      this.setState({
        winLine: calculateWinner(squares)[1]
      })
      return
    }
    squares[i] = this.state.xIsNext ? "X" : "O"
    this.setState({
      history: history.concat([
        {squares: squares}
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
      cellClicked: this.state.cellClicked.concat(i)
    })
  }

  jumpTo = (step) => {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    })
  }

  toggleSort = () => {
    this.setState({
      descending: !this.state.descending
    })
  }

  render() {
    const { history, stepNumber, cellClicked, xIsNext, descending } = this.state
    const current = history[stepNumber]
    const winner = calculateWinner(current.squares)[0]
    return (
      <CSS.Game>
        <div>
          <Board
            winLine={calculateWinner(current.squares)[1]}
            squares={current.squares}
            onClick={this.handleClick}
          />
          <MoveList
            history={history}
            descending={descending}
            stepNumber={stepNumber}
            jumpTo={this.jumpTo}
            cellClicked={cellClicked}
          />
        </div>
        <CSS.GameInfo>
          <Status winner={winner} xIsNext={xIsNext} />
          <SortButton descending={descending} toggleSort={this.toggleSort} />
        </CSS.GameInfo>
      </CSS.Game>
    )
  }
}

export default App
