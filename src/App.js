import React from 'react'
import HeaderBar from './News-Home-Page/HeaderBar'
import Home from './News-Home-Page/Home'
import { Container } from 'react-bootstrap'
import CardPage from './News-Home-Page/CardPage'

const App = () => {
  return (
    <div>
      <Container>
      <HeaderBar/>
      <Home/>
      <CardPage/>
      </Container>
    </div>
  )
}

export default App