import useCarIndex from '../hooks/useCarIndex'
import useCarStatus from '../hooks/useCarStatus'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;

  border-width: 1px;
  border-style: solid;
  border-color: #fff;
  

  flex: 1;
  justify-content: center;
  align-items: flex-start;

  p {
    margin-left: 10px;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
  }
`

const descriptions = [
  'None',
  'Medium',
  'Hotlap',
  'Overtake'
]

const DeployMode: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  const carIndex = useCarIndex()
  const carStatus = useCarStatus()

  if (carStatus.length === 0) {
    return <Container style={style} />
  }

  const ersDeployMode = descriptions[carStatus[carIndex].m_ersDeployMode]

  return (
    <Container style={style}>
      <p>{ersDeployMode}</p>
    </Container>
  )
}

export default DeployMode
