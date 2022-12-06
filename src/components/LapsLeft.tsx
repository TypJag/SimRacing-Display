import useCarIndex from '../hooks/useCarIndex'
import useLapData from '../hooks/useLapData'
import useSessionData from '../hooks/useSessionData'
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

const DiffBestLap: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  const carIndex = useCarIndex()
  const lapData = useLapData()
  const sessionData = useSessionData()

  if (lapData.length === 0 || sessionData === undefined) {
    return <Container style={style} />
  }
  const lapsLeft = sessionData.m_totalLaps - lapData[carIndex].m_currentLapNum

  return (
    <Container style={style}>
      <p>{lapsLeft}</p>
    </Container>
  )
}

export default DiffBestLap
