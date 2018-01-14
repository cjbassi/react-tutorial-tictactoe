const initialState = {
  boardHistory: [Array(9).fill(null)],
  clickHistory: [null],
  step: 0,
  xIsNext: true,
  winLine: Array(3).fill(null),
  winner: '',
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a], lines[i]]
    }
  }
  return [null, Array(3).fill(null)]
}

const game = (state = initialState, action) => {
  switch (action.type) {
    case 'CLICK_SQUARE':
      const boardHistory = state['boardHistory'].slice(0, state['step'] + 1)
      const currentBoard = boardHistory[boardHistory.length - 1].slice()
      const { winner, winLine } = calculateWinner(currentBoard)
      if (winner || currentBoard[action.square]) {
        // if game has been won, or the clicked square is already occupied
        return {
          ...state,
          winner,
          winLine,
        }
      }
      currentBoard[action.square] = state['xIsNext'] ? 'X' : 'O'
      return {
        ...state,
        boardHistory: boardHistory.concat(currentBoard),
        clickHistory: state['clickHistory'].slice()[state['step']] = action.square,
        step: state['step']++,
        xIsNext: !state['xIsNext'],
      }
    case 'CHANGE_STEP':
      return {
        ...state,
        step: action.step,
        xIsNext: (action.step % 2) === 0,
      }
    default:
      return state
  }
}

export default game
