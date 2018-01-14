const descending = (state = true, action) => {
  switch (action.type) {
    case 'TOGGLE_SORT':
      return !state
    default:
      return state
  }
}

export default descending
