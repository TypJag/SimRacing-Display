import { useState, useEffect } from 'react'
import { socket } from '../App'
import { PacketSessionData } from '../types'

function useSessionData (): PacketSessionData | undefined {
  const [sessionData, setSessionData] = useState<PacketSessionData>()

  useEffect(() => {
    socket.on('session', (data: PacketSessionData) => {
      setSessionData(data)
    })
  }, [])

  return sessionData
}

export default useSessionData
