import { useEffect, useState } from 'react'
import useCarIndex from '../hooks/useCarIndex'
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

const LastLapTime: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  const [prevLapTime, setPrevLapTime] = useState<number | null>(null)

  const carIndex = useCarIndex()
  const lapData = useLapData()

  useEffect(() => {
    if (lapData.length - 1 < carIndex) return

    const lastLap = lapData[carIndex].m_lastLapTimeInMS

    if (lastLap == null) return // car is not on track or has not completed a lap

    setPrevLapTime(lastLap)
  }, [lapData])

  if (lapData.length === 0 || prevLapTime == null) {
    return <Container style={style} />
  }

  const time = intervalToDuration({ start: 0, end: prevLapTime })
  const ms = prevLapTime % 1000

  return (
    <Container style={style}>
      <p>{time.minutes}:{time.seconds}.{ms}</p>
    </Container>
  )
}

export default LastLapTime
