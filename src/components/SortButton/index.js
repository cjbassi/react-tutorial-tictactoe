import * as React from 'react'

import CSS from './CSS'

const SortButton = (props) => {
  const { toggleSort } = props
  return (
    <CSS>
      <button onClick={toggleSort}>
        toggle sort
      </button>
    </CSS>
  )
}

export default SortButton
