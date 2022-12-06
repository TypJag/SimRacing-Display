import styled from 'styled-components'
import BatterBar from '../components/BatteryBar'
import DeployMode from '../components/DeployMode'
import LapsDone from '../components/LapsDone'
import EngineRPM from '../components/RPM'
import DiffBestLap from '../components/DiffBestLap'
import LapsLeft from '../components/LapsLeft'
import TyreTemps from '../components/TyreTemps'
import CurrentGear from '../components/CurrentGear'
import BatteryPercentage from '../components/BatteryPercentage'
import FuelMix from '../components/FuelMix'
import FuelRemainingLaps from '../components/FuelRemainingLaps'
import DiffOnThrottle from '../components/DiffOnThrottle'
import BrakeBias from '../components/BrakeBias'
import PrevLapComp from '../components/PrevLapComp'
import LastLapTime from '../components/LastLapTime'
import BestLap from '../components/BestLap'

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

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
`

const Center = styled.div`
  width: 23%;
  height: 100%;
  flex-direction: column;
  display: flex;
`

const Right = styled.div`
  width: 30%;
  display: flex;
  flex: 1;
  height: 100%;
`

const Display: React.FC = () => {
  return (
    <Container>
      <Header>
        <DeployMode />
        <EngineRPM />
        <LapsDone />
      </Header>

      <Row>
        <Left>
          <DiffBestLap />
          <LapsLeft />
          <TyreTemps />
        </Left>
        <Center>
          <CurrentGear />
          <BatteryPercentage />
          <FuelMix />
          <FuelRemainingLaps />
          <DiffOnThrottle />
        </Center>
        <Right>
          <Column>
            <BrakeBias />
            <PrevLapComp />
            <LastLapTime />
            <BestLap />
          </Column>
          <BatterBar />
        </Right>
      </Row>

    </Container>
  )
}

export default Display
