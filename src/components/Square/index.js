import React from 'react'
import CSS from './CSS'

let Square = ({ winLine, id, content, clickSquare }) => {
  return (
    <CSS onClick={() => clickSquare(id)}>
      {content}
    </CSS>
  )
}

export default Square
