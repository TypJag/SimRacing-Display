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

const DiffBestLap: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  const [bestLapTime, setBestLapTime] = useState<number | null>(null)
  const carIndex = useCarIndex()
  const carStatus = useCarStatus()
  const lapData = useLapData()

  useEffect(() => {
    if (lapData.length - 1 < carIndex) return
    const last = lapData[carIndex].m_lastLapTimeInMS
    if (last == null) return
    if (bestLapTime == null || last < bestLapTime || bestLapTime === 0) {
      setBestLapTime(last)
    }
  }, [lapData])

  if (carStatus.length === 0 || lapData.length === 0 || bestLapTime == null) {
    return <Container style={style} />
  }

  const time = intervalToDuration({ start: 0, end: lapData[carIndex].m_lastLapTimeInMS - bestLapTime })
  const ms = (lapData[carIndex].m_lastLapTimeInMS - bestLapTime) % 1000

  return (
    <Container style={style}>
      <p>{time.seconds}.{ms}</p>
    </Container>
  )
}

export default DiffBestLap
