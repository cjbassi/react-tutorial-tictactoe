import React from 'react'
import CSS from './CSS'

const Square = ({ content, clickSquare, winningSquare }) => {
  return (
    <CSS winningSquare={winningSquare} onClick={clickSquare}>
      {content}
    </CSS>
  )
}

export default Square
