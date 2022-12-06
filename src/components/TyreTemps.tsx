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

  flex-wrap: wrap;
`

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50%;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`

const TyreTemps: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  const carIndex = useCarIndex()
  const carTelemetry = useCarTelemetry()

  if (carTelemetry.length === 0) {
    return <Container style={style} />
  }
  const tyreTemps = carTelemetry[carIndex].m_tyresInnerTemperature

  return (
    <Container style={style}>
      {tyreTemps.map((num, i) => <Block key={i}>{num}</Block>)}
    </Container>
  )
}

export default TyreTemps
