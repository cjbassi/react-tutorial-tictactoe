import React from 'react'

const Status = ({ xIsNext, winner }) => {
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
