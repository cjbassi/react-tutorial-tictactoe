import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

let Square = (props) => {
  return (
    <button
      id={props.winLine.includes(props.number) ? 'winner' : 'other'}
      className="square"
      onClick={props.onClick}>
        {props.value}
    </button>
  )
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        winLine={this.props.winLine}
        key={i}
        number={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    )
  }

  render() {
    let row = []
    let cells = []
    let cellNumber = 0
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        row.push(this.renderSquare(cellNumber))
        cellNumber++
      }
      cells.push(<div key={i} className="board-row">{row}</div>)
      row = []
    }
    return (
      <div>
        {cells}
      </div>
    )
  }
}

class Game extends React.Component {
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
    const history = this.state.history
    const current = history[this.state.stepNumber]
    const [winner, lines] = calculateWinner(current.squares)
    let moves = history.map((step, move) => {
      const desc = move ?
        `Go to move #${move} (${this.state.cellClicked[move]})`:
        'Go to game start'
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>
            {move === this.state.stepNumber ? <b>{desc}</b> : desc}
          </button>
        </li>
      )
    })

    let status
    if (winner) {
      status = "Winner: " + winner
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O")
    }

    let sort = <button onClick={() => this.toggleSort()}>toggle sort</button>
    if (!this.state.descending) {
      moves = moves.reverse()
    }

    return (
      <div className="game">
        <div id="board/moves">
          <div className="game-board">
            <Board
              winLine={calculateWinner(current.squares)[1]}
              squares={current.squares}
              onClick={i => this.handleClick(i)}
            />
          </div>
          <ol id='moves'>{moves}</ol>
        </div>
        <div className="game-info">
          <div id='status'>{status}</div>
          <div id='sort'>{sort}</div>
        </div>
      </div>
    )
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"))

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
