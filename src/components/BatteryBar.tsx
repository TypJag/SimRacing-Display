import styled from 'styled-components'
import useCarIndex from '../hooks/useCarIndex'
import useCarStatus from '../hooks/useCarStatus'

export const batteryMaxCapacity = 4000000
const numberOfBars = 30
const barSpacing = 7

export const batteryBarWidth = 20

const Container = styled.div`
  width: ${batteryBarWidth}px;
  height: calc(100% - 2px);
  background-color: #000;
  display: flex;
  flex-direction: column;

  border-width: 1px;
  border-style: solid;
  border-color: #fff;
`

const Bar = styled.div`
  width: 100%;
  height: ${100 / numberOfBars}%;
  justify-content: center;
  align-items: center;
  display: flex;
`

const Dot = styled.div`
  width: calc(100% - ${barSpacing}px);
  height: calc(100% - ${barSpacing}px);
  border-radius: 2px;
`

const BatterBar: React.FC = () => {
  const carIndex = useCarIndex()
  const carStatus = useCarStatus()

  if (carStatus.length === 0) {
    return <Container />
  }

  const batteryJoules = carStatus[carIndex].m_ersStoreEnergy
  const batteryPercentage = batteryJoules / batteryMaxCapacity

  return (
    <Container>
      {Array.from(Array(numberOfBars).keys()).map((i) => (
        <Bar key={i}>
          <Dot style={{
            backgroundColor: i / numberOfBars < 1 - batteryPercentage ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,0,1)'
          }}
          />
        </Bar>
      ))}

    </Container>
  )
}

export default BatterBar
