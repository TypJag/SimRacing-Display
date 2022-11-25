import React, { useEffect } from 'react'
import { io } from 'socket.io-client'
import { PacketEventData } from './types'
import { CarTelemetryData } from './types/carTelemetry'
import Display from './pages/Display'
import styled from 'styled-components'

const Limiter = styled.div`
  width: 640px;
  height: 480px;
`

export const socket = io('http://192.168.1.127:4000')

const App: React.FC = () => {
  // const [carTelemetry, setCarTelemetry] = React.useState<CarTelemetryData[]>()
  // const [carIndex, setCarIndex] = React.useState<number>(0)

  // useEffect(() => {
  //   // client-side
  //   socket.on('connect', () => {
  //     console.log(socket.id) // x8WIv7-mJelg7on_ALbx
  //   })

  //   socket.on('lapData', (data) => {
  //     console.log('lapData', data)
  //   })

  //   socket.on('event', (data: PacketEventData) => {
  //     setCarIndex(data.m_header.m_playerCarIndex)
  //   })

  //   socket.on('carTelemetry', (data) => {
  //     const telementry: CarTelemetryData[] = data.m_carTelemetryData
  //     setCarTelemetry(telementry)
  //   })
  // }, [])

  return (
    <Limiter>
      <Display />
    </Limiter>
  )
}

export default App
