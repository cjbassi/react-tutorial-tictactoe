import calculateWinner from '../utils/calculateWinner'

const initialState = {
  boardHistory: [Array(9).fill(null)],
  clickHistory: [null],
  step: 0,
  xIsNext: true,
  winningSquares: null,
}

const game = (state = initialState, action) => {
  switch (action.type) {
    case 'CLICK_SQUARE':
      const boardHistory = state.boardHistory.slice(0, state.step + 1)
      const currentBoard = boardHistory[boardHistory.length - 1].slice()
      let winningSquares = calculateWinner(currentBoard)
      if (winningSquares || currentBoard[action.square]) {
        // if game has been won, or the clicked square is already occupied
        return {
          ...state,
          winningSquares,
        }
      }
      currentBoard[action.square] = state.xIsNext ? 'X' : 'O'
      boardHistory[state.step + 1] = currentBoard
      const clickHistory = state.clickHistory.slice()
      clickHistory[state.step] = action.square
      winningSquares = calculateWinner(currentBoard)
      return {
        ...state,
        boardHistory,
        clickHistory,
        step: ++state.step,
        xIsNext: !state.xIsNext,
        winningSquares,
      }
    case 'CHANGE_STEP':
      return {
        ...state,
        step: action.step,
        xIsNext: (action.step % 2) === 0,
        winningSquares,
      }
    default:
      return state
  }
}

export default game
