import useCarIndex from '../hooks/useCarIndex'
import useCarTelemetry from '../hooks/useCarTelemetry'
import styled from 'styled-components'

const Container = styled.div`
  border-width: 1px;
  border-style: solid;
  border-color: #fff;

  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`

const Letter = styled.div`
  font-size: 150px;
  margin: -12px; 
  margin-top: -32px;
  color: #fff;
`

const CurrentGear: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  const carIndex = useCarIndex()
  const carTelemetry = useCarTelemetry()

  if (carTelemetry.length === 0) {
    return <Container style={style} />
  }
  const currentGear = carTelemetry[carIndex].m_gear

  return (
    <Container style={style}>
      <Letter>{currentGear}</Letter>
    </Container>
  )
}

export default CurrentGear
