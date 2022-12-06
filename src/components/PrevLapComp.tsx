import { useEffect, useState } from 'react'
import useCarIndex from '../hooks/useCarIndex'
import useCarStatus from '../hooks/useCarStatus'
import useLapData from '../hooks/useLapData'
import styled from 'styled-components'
import { intervalToDuration } from 'date-fns'

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

const PrevLapComp: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  const [prevLapTime, setPrevLapTime] = useState<number | null>(null)
  const [savedDiff, setSavedDiff] = useState<number | null>(null)

  const carIndex = useCarIndex()
  const carStatus = useCarStatus()
  const lapData = useLapData()

  useEffect(() => {
    if (lapData.length - 1 < carIndex) return

    const lastLap = lapData[carIndex].m_lastLapTimeInMS

    if (lastLap == null) return // car is not on track or has not completed a lap

    if (prevLapTime == null && lastLap != null) { // first lap
      setPrevLapTime(lastLap)
      setSavedDiff(0)
    }

    if (prevLapTime != null && prevLapTime !== lastLap) { //
      setSavedDiff(prevLapTime - lastLap)
      setPrevLapTime(lastLap)
    }
  }, [lapData])

  if (carStatus.length === 0 || lapData.length === 0 || prevLapTime == null || savedDiff == null) {
    return <Container style={style} />
  }

  const time = intervalToDuration({ start: 0, end: savedDiff })
  const ms = savedDiff % 1000

  return (
    <Container style={style}>
      <p>{time.seconds}.{ms}</p>
    </Container>
  )
}

export default PrevLapComp

// lastLap - lastLap-1 = diff1
// lastLap-1 - lastLap-2 = diff2
