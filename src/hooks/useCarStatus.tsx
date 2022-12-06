import { useState, useEffect } from 'react'
import { socket } from '../App'
import { PacketCarStatusData } from '../types'

function useCarStatus (): PacketCarStatusData['m_carStatusData'] {
  const [carSatus, setCarStatus] = useState<PacketCarStatusData['m_carStatusData']>([])

  useEffect(() => {
    socket.on('carStatus', (data: PacketCarStatusData) => {
      setCarStatus(data.m_carStatusData)
    })
  }, [])

  return carSatus
}

export default useCarStatus
