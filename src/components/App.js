import React from 'react'
import styled from 'styled-components'

import Board from './Board.js'

const GameCSS = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
`

const GameInfoCSS = styled.div`
  margin-left: -30px;
  padding-left: 0px;
`

const SortButtonCSS = styled.div`
  margin-top: 10px;
  margin-left: 8px;
`

const MoveListCSS = styled.ol`
  margin-top: 20px;
  padding-left: 5px;
  margin-left: 10px;
  width: 170px;
`

class App extends React.Component {
  constructor() {
    super()
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

  handleClick(i) {
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

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    })
  }

  toggleSort() {
    this.setState({
      descending: !this.state.descending
    })
  }

  render() {
    let { history, stepNumber, cellClicked, xIsNext, descending } = this.state
    const current = history[stepNumber]
    const winner = calculateWinner(current.squares)[0]
    let moves = history.map((step, move) => {
      const desc = move
        ? `Go to move #${move} (${cellClicked[move]})`
        : 'Go to game start'
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>
            {move === stepNumber ? <b>{desc}</b> : desc}
          </button>
        </li>
      )
    })

    let status
    if (winner) {
      status = "Winner: " + winner
    } else {
      status = "Next player: " + (xIsNext ? "X" : "O")
    }

    let sort = <button onClick={() => this.toggleSort()}>toggle sort</button>
    if (!descending) {
      moves = moves.reverse()
    }

    return (
      <GameCSS>
        <div>
          <Board
            winLine={calculateWinner(current.squares)[1]}
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
          <MoveListCSS>{moves}</MoveListCSS>
        </div>
        <GameInfoCSS>
          <div>{status}</div>
          <SortButtonCSS>{sort}</SortButtonCSS>
        </GameInfoCSS>
      </GameCSS>
    )
  }
}

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

export default App
