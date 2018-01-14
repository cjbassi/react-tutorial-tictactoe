import * as React from 'react'

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

export default Status
