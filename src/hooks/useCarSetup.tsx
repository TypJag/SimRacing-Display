import { useState, useEffect } from 'react'
import { socket } from '../App'
import { PacketCarSetupData } from '../types'

function useCarSetup (): PacketCarSetupData['m_carSetups'] {
  const [carSetup, setCarSetup] = useState<PacketCarSetupData['m_carSetups']>([])

  useEffect(() => {
    socket.on('carSetups', (data: PacketCarSetupData) => {
      setCarSetup(data.m_carSetups)
    })
  }, [])

  return carSetup
}

export default useCarSetup
