import React from 'react'
import * as CSS from './CSS'

let Square = ({ winLine, number, value, onClick }) => {
  return (
    <CSS.Square
      winner={winLine.includes(number)}
      onClick={onClick}>
        {value}
    </CSS.Square>
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
      cells.push(<CSS.BoardRow key={i}>{row}</CSS.BoardRow>)
      row = []
    }
    return (
      <div>
        {cells}
      </div>
    )
  }
}

export default Board
