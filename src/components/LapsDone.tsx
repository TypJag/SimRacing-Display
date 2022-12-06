import useCarIndex from '../hooks/useCarIndex'
import useLapData from '../hooks/useLapData'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;

  border-width: 1px;
  border-style: solid;
  border-color: #fff;

  flex: 1;
  justify-content: center;
  align-items: flex-end;

  p {
    margin-right: 10px;
    font-size: 20px;
    font-weight: bold;
  }
`

const LapsDone: React.FC = () => {
  const lapsData = useLapData()
  const carIndex = useCarIndex()

  if (lapsData.length === 0) {
    return <Container />
  }

  const lapsDone = lapsData[carIndex].m_currentLapNum

  return (
    <Container style={{ color: 'white' }}>
      <p>{lapsDone}</p>
    </Container>
  )
}

export default LapsDone
