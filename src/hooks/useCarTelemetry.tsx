import { useState, useEffect } from 'react'
import { socket } from '../App'
import { PacketCarTelemetryData } from '../types'

function useCarTelemetry (): PacketCarTelemetryData['m_carTelemetryData'] {
  const [carSatus, setCarStatus] = useState<PacketCarTelemetryData['m_carTelemetryData']>([])

  useEffect(() => {
    socket.on('carTelemetry', (data: PacketCarTelemetryData) => {
      setCarStatus(data.m_carTelemetryData)
    })
  }, [])

  return carSatus
}

export default useCarTelemetry
