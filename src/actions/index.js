export const clickSquare = (square) => {
  return {
    type: 'CLICK_SQUARE',
    square,
  }
}

export const changeStep = (step) => {
  return {
    type: 'CHANGE_STEP',
    step,
  }
}

export const toggleSort = () => {
  return {
    type: 'TOGGLE_SORT',
  }
}
