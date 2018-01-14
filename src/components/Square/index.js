import * as React from 'react'
import PropTypes from 'prop-types'

import CSS from './CSS'

const Square = (props) => {
  const { content, clickSquare, winningSquare } = props
  return (
    <CSS winningSquare={winningSquare} onClick={clickSquare}>
      {content}
    </CSS>
  )
}

Square.propTypes = {
  content: PropTypes.string.isRequired,
  clickSquare: PropTypes.func.isRequired,
  winningSquare: PropTypes.bool.isRequired,
}

export default Square
