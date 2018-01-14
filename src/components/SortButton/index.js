import * as React from 'react'
import PropTypes from 'prop-types'

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

SortButton.propTypes = {
  toggleSort: PropTypes.func.isRequired,
}

export default SortButton
