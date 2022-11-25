import React, { useEffect } from 'react'
import { io } from 'socket.io-client'
import { PacketEventData } from './types'
import { CarTelemetryData } from './types/carTelemetry'

const socket = io('http://192.168.1.127:4000')

const App: React.FC = () => {
  const [carTelemetry, setCarTelemetry] = React.useState<CarTelemetryData[]>()
  const [carIndex, setCarIndex] = React.useState<number>(0)

  useEffect(() => {
    // client-side
    socket.on('connect', () => {
      console.log(socket.id) // x8WIv7-mJelg7on_ALbx
    })

    socket.on('lapData', (data) => {
      console.log('lapData', data)
    })

    socket.on('event', (data: PacketEventData) => {
      setCarIndex(data.m_header.m_playerCarIndex)
    })

    socket.on('carTelemetry', (data) => {
      const telementry: CarTelemetryData[] = data.m_carTelemetryData
      setCarTelemetry(telementry)
    })
  }, [])

  return (
    <div className='App'>
      {carTelemetry != null && carTelemetry[carIndex].m_engineRPM}
    </div>
  )
}

export default App
