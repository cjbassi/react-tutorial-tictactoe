import React from 'react'

import CSS from './CSS'

const SortButton = ({ toggleSort }) => {
  return (
    <CSS>
      <button onClick={toggleSort}>
        toggle sort
      </button>
    </CSS>
  )
}

export default SortButton
