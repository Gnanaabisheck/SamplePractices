import React from 'react'
import { Container } from 'react-bootstrap'

const CreationHeader = () => {
  return (
    <div>
        <Container>
        <div className="creations-header">
            <h1 className='creation-title'>
          our creations
          </h1>
            <button className="see-all-button">
            See all
          </button>
          </div>
        </Container>
     
    </div>
  )
}

export default CreationHeader