import React, { useEffect } from 'react'
import { PacketCarStatusData } from '../types'
import styled from 'styled-components'
import { socket } from '../App'
import useCarIndex from '../hooks/useCarIndex'

const descriptions = [
  'None',
  'Medium',
  'Hotlap',
  'Overtake'
]

const DeployMode: React.FC = () => {
  const carIndex = useCarIndex()
  const [ersDeployMode, setErsDeployMode] = React.useState('')

  useEffect(() => {
    socket.on('carStatus', (data: PacketCarStatusData) => {
      setErsDeployMode(descriptions[data.m_carStatusData[carIndex].m_ersDeployMode])
    })
  }, [])

  return (
    <div style={{ color: 'white' }}>{ersDeployMode}</div>
  )
}

export default DeployMode
