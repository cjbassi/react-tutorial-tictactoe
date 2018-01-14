import { combineReducers } from 'redux'

import game from './game'
import descending from './descending'

const rootReducer = combineReducers({
  game,
  descending,
})

export default rootReducer
