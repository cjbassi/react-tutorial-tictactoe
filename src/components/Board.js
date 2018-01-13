import React from 'react'
import styled from 'styled-components'

const BoardRowCSS = styled.div`
  margin-left: 20px;
  &:after {
    clear: both;
    content: "";
    display: table;
  }
`

const SquareCSS = styled.button`
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;
  &:focus {
    outline: none;
  }
`

let Square = ({ winLine, number, value, onClick }) => {
  return (
    <SquareCSS
      style={
        winLine.includes(number)
          ? {backgroundColor: 'yellow'}
          : {}
      }
      onClick={onClick}>
        {value}
    </SquareCSS>
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
      cells.push(<BoardRowCSS key={i}>{row}</BoardRowCSS>)
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
