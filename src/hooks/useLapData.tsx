import { useState, useEffect } from 'react'
import { socket } from '../App'
import { PacketLapData } from '../types'

function useLapData (): PacketLapData['m_lapData'] {
  const [carSatus, setCarStatus] = useState<PacketLapData['m_lapData']>([])

  useEffect(() => {
    socket.on('lapData', (data: PacketLapData) => {
      setCarStatus(data.m_lapData)
    })
  }, [])

  return carSatus
}

export default useLapData
