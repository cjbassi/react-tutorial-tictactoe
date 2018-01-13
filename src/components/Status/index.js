import React from 'react'

const Status = ({ winner, xIsNext }) => {
  let status
  if (winner) {
    status = "Winner: " + winner
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O")
  }
  return (
    <div>{status}</div>
  )
}

export default Status
