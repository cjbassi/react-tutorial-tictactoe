import * as React from 'react'

import * as CSS from './CSS'

import Board from '../Board'
import MoveList from '../../containers/MoveList'
import SortButton from '../../containers/SortButton'
import Status from '../../containers/Status'

const App = () => {
  return (
    <CSS.Game>
      <div>
        <Board />
        <MoveList />
      </div>
      <CSS.GameInfo>
        <Status />
        <SortButton />
      </CSS.GameInfo>
    </CSS.Game>
  )
}

export default App
