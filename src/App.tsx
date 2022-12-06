import React from 'react'
import { io } from 'socket.io-client'
import Display from './pages/Display'
import styled from 'styled-components'

const Limiter = styled.div`
  width: 100vw;
  height: 100vh;
`

export const socket = io('http://192.168.1.127:4000')

const App: React.FC = () => {
  return (
    <Limiter>
      <Display />
    </Limiter>
  )
}

export default App
