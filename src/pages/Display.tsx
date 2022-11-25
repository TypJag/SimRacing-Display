import styled from 'styled-components'
import BatterBar from '../components/BatteryBar'

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: black;
  flex-direction: column;
`

const Header = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
`

const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`

const Left = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
`

const Center = styled.div`
  width: 23%;
  background-color: green;
  height: 100%;
`

const Right = styled.div`
  width: 23%;
  display: flex;
  flex: 1;
  height: 100%;
`

const Display: React.FC = () => {
  return (
    <Container>
      <Header>
        header
      </Header>

      <Row>
        <Left />
        <Center />
        <Right />
        <BatterBar />
      </Row>

    </Container>
  )
}

export default Display
