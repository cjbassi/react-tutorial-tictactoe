import styled from 'styled-components'

const Game = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
`

const GameInfo = styled.div`
  margin-left: -30px;
  padding-left: 0px;
`

const SortButton = styled.div`
  margin-top: 10px;
  margin-left: 8px;
`

const MoveList = styled.ol`
  margin-top: 20px;
  padding-left: 5px;
  margin-left: 10px;
  width: 170px;
`

export {
  Game,
  GameInfo,
  SortButton,
  MoveList,
}
