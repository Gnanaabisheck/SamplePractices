import React from 'react'
import { Container } from 'react-bootstrap'
import banner from '../Loopstudious/LoopstudioImages/desktop/image-interactive.jpg'
const ContentPage = () => {
  return (
    <div>
      
        <Container>
        <div className="content-page">
          <img src={banner} alt="" className='interactive-img'/>
          <div className="leader-box">
            <h1 className='leader-box-title'>
             the leader in interactive vr
            </h1>
            <p className="leader-box-desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, dicta maxime. Quasi, reprehenderit quaerat laboriosam porro repellendus corrupti eligendi maxime, quis rerum vero maiores expedita blanditiis autem. 
            </p>
          </div>
          </div>
        </Container>
     
    </div>
  )
}

export default ContentPage