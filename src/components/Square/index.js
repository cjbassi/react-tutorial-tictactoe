import * as React from 'react'
import CSS from './CSS'

const Square = (props) => {
  const { content, clickSquare, winningSquare } = props
  return (
    <CSS winningSquare={winningSquare} onClick={clickSquare}>
      {content}
    </CSS>
  )
}

export default Square
