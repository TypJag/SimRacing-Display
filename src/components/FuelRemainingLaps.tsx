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

const FuelRemainingLaps: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  const carIndex = useCarIndex()
  const carStatus = useCarStatus()

  if (carStatus.length === 0) {
    return <Container style={style} />
  }

  const fuelLeft = carStatus[carIndex].m_fuelRemainingLaps

  return (
    <Container style={style}>
      <p>{fuelLeft.toPrecision(2)}</p>
    </Container>
  )
}

export default FuelRemainingLaps
