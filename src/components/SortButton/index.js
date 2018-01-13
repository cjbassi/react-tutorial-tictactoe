import React from 'react'
import CSS from './CSS'

const SortButton = ({ descending, toggleSort }) => {
  let sort = <button onClick={toggleSort}>toggle sort</button>
  return (
    <CSS>{sort}</CSS>
  )
}

export default SortButton
