export const initialState = true

const descendingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_SORT':
      return !state
    default:
      return state
  }
}

export default descendingReducer
