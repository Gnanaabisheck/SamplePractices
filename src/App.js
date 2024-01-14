import React, { useState } from 'react'
import HeaderBar from './News-Home-Page/HeaderBar'
import Home from './News-Home-Page/Home'
import { Container } from 'react-bootstrap'
import CardPage from './News-Home-Page/CardPage'
import HomePage from './Loopstudious/HomePage'

const App = () => {
  const [selectedStar,setSelectedStar]=useState(0)
  function handleClick (i){
    console.log(i);
  }
  return (
    <div className='main'>

      {/* <Container>
      <HeaderBar/>
      <Home/>
      <CardPage/>
      </Container>  */}

      {/* new project */}
      
    <HomePage/> 

    </div>
  )
}

export default App