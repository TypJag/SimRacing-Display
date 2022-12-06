import useCarIndex from '../hooks/useCarIndex'
import useCarSetup from '../hooks/useCarSetup'
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

const DiffOnThrottle: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  const carIndex = useCarIndex()
  const carSetup = useCarSetup()

  if (carSetup.length === 0) {
    return <Container style={style} />
  }

  const diffOnThrottle = carSetup[carIndex].m_onThrottle

  return (
    <Container style={style}>
      <p>{diffOnThrottle}</p>
    </Container>
  )
}

export default DiffOnThrottle
