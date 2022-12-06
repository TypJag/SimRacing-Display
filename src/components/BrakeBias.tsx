import useCarIndex from '../hooks/useCarIndex'
import useCarStatus from '../hooks/useCarStatus'
import styled from 'styled-components'

const Container = styled.div`
  border-width: 1px;
  border-style: solid;
  border-color: #fff;

  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  p {
    font-size: 20px;
    font-weight: bold;
    color: #fff;
  }
`

const BrakeBias: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  const carIndex = useCarIndex()
  const carStatus = useCarStatus()

  if (carStatus.length === 0) {
    return <Container style={style} />
  }

  const brakeBias = carStatus[carIndex].m_frontBrakeBias

  return (
    <Container style={style}>
      <p>{brakeBias}</p>
    </Container>
  )
}

export default BrakeBias
