import useCarIndex from '../hooks/useCarIndex'
import useCarTelemetry from '../hooks/useCarTelemetry'
import useCarStatus from '../hooks/useCarStatus'
import styled from 'styled-components'
import { batteryMaxCapacity } from '../components/BatteryBar'

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

const BatteryPercentage: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  const carIndex = useCarIndex()
  const carTelemetry = useCarTelemetry()
  const carStatus = useCarStatus()

  if (carTelemetry.length === 0 || carStatus.length === 0) {
    return <Container style={style} />
  }
  const batteryJoules = carStatus[carIndex].m_ersStoreEnergy
  const batteryPercentage = batteryJoules / batteryMaxCapacity

  return (
    <Container style={style}>
      <p>{Math.round(batteryPercentage * 100)}%</p>
    </Container>
  )
}

export default BatteryPercentage
