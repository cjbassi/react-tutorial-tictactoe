const clickSquare = (square) => {
  return {
    type: 'CLICK_SQUARE',
    square,
  }
}

const changeStep = (step) => {
  return {
    type: 'CHANGE_STEP',
    step,
  }
}

const toggleSort = () => {
  return {
    type: 'TOGGLE_SORT',
  }
}

export default {
  clickSquare,
  changeStep,
  toggleSort,
}
