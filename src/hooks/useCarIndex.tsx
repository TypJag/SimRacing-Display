import { useState, useEffect } from 'react'
import { socket } from '../App'
import { PacketEventData } from '../types'

function useCarIndex (): number {
  const [carIndex, setCarIndex] = useState(0)

  useEffect(() => {
    socket.on('event', (data: PacketEventData) => {
      setCarIndex(data.m_header.m_playerCarIndex)
    })
  }, [])
  return carIndex
}

export default useCarIndex
