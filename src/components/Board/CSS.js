import styled from 'styled-components'

const BoardRow = styled.div`
  margin-left: 20px;
  &:after {
  clear: both;
  content: "";
  display: table;
  }
`

export default BoardRow
