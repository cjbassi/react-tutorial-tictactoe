import { connect } from 'react-redux'

import SortButton from '../components/SortButton'
import { toggleSort } from '../actions'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleSort: () => {
      dispatch(toggleSort())
    },
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(SortButton)
