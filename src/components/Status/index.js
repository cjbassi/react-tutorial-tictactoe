import * as React from 'react'
import PropTypes from 'prop-types'

const Status = (props) => {
  const { xIsNext, winner } = props
  let status
  if (winner) {
    status = `Winner: ${winner}`
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`
  }
  return (
    <div>{status}</div>
  )
}

Status.propTypes = {
  xIsNext: PropTypes.bool.isRequired,
  winner: PropTypes.string.isRequired,
}

export default Status
