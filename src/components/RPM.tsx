import useCarIndex from '../hooks/useCarIndex'
import useCarTelemetry from '../hooks/useCarTelemetry'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;

  border-width: 1px;
  border-style: solid;
  border-color: #fff;

  width: 50%;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`

const EngineRPM: React.FC = () => {
  const carIndex = useCarIndex()
  const carTelemetry = useCarTelemetry()

  if (carTelemetry.length === 0) {
    return <Container />
  }

  const RPM = carTelemetry[carIndex].m_engineRPM

  return (
    <Container style={{ color: 'white' }}>{RPM}</Container>
  )
}

export default EngineRPM
