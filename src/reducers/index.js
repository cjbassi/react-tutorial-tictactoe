import { combineReducers } from 'redux'

import gameReducer from './game'
import descendingReducer from './descending'

const rootReducer = combineReducers({
  game: gameReducer,
  descending: descendingReducer,
})

export default rootReducer
