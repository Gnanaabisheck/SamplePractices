import React from 'react'
import { Card, CardImg, Col, Container, Image, Row } from 'react-bootstrap'
import FooterPage from './FooterPage'

const Creation = () => {
  const dataForDesktop=[
    {
    id:1,
    img:require('../Loopstudious/LoopstudioImages/desktop/image-curiosity.jpg'),
    tit:"the curiosity"
  },
  {
    id:2,
    img:require('../Loopstudious/LoopstudioImages/desktop/image-deep-earth.jpg'),
    tit:"the Deep earth"
  },
  {
    id:3,
    img:require('../Loopstudious/LoopstudioImages/desktop/image-fisheye.jpg'),
    tit:"make it fisheye"
  },
  {
    id:4,
    img:require('../Loopstudious/LoopstudioImages/desktop/image-from-above.jpg'),
    tit:"from up above vr"
  },
  {
    id:5,
    img:require('../Loopstudious/LoopstudioImages/desktop/image-grid.jpg'),
    tit:"the grid"
  },
  {
    id:6,
    img:require('../Loopstudious/LoopstudioImages/desktop/image-night-arcade.jpg'),
    tit:"night arcade"
  },
  {
    id:7,
    img:require('../Loopstudious/LoopstudioImages/desktop/image-pocket-borealis.jpg'),
    tit:"pocket borealis"
  },
  {
    id:8,
    img:require('../Loopstudious/LoopstudioImages/desktop/image-soccer-team.jpg'),
    tit:"soccer team vr"
  }

]

const dataForMobile=[
  {
    id:1,
    img:require('../Loopstudious/LoopstudioImages/mobile/image-curiosity.jpg'),
    tit:"the curiosity"
  },
  {
    id:2,
    img:require('../Loopstudious/LoopstudioImages/mobile/image-deep-earth.jpg'),
    tit:"the Deep earth"
  },
  {
    id:3,
    img:require('../Loopstudious/LoopstudioImages/mobile/image-fisheye.jpg'),
    tit:"make it fisheye"
  },
  {
    id:4,
    img:require('../Loopstudious/LoopstudioImages/mobile/image-from-above.jpg'),
    tit:"from up above vr"
  },
  {
    id:5,
    img:require('../Loopstudious/LoopstudioImages/mobile/image-grid.jpg'),
    tit:"the grid"
  },
  {
    id:6,
    img:require('../Loopstudious/LoopstudioImages/mobile/image-night-arcade.jpg'),
    tit:"night arcade"
  },
  {
    id:7,
    img:require('../Loopstudious/LoopstudioImages/mobile/image-pocket-borealis.jpg'),
    tit:"pocket borealis"
  },
  {
    id:8,
    img:require('../Loopstudious/LoopstudioImages/mobile/image-soccer-team.jpg'),
    tit:"soccer team vr"
  }
]
  return (
    <div className='creations'>
      <Container>
          {/* for desktop and laptops view */}


        <Container className='desktop'>
        <Row>
            {
              dataForDesktop.map((item)=>(
                <Col md={3} className='image-col'>
                 <div className="image-box">
                  <img src={item.img} alt="" className='image'/>
                  <h1 className="image-text">
                    {item.tit}
                  </h1>
                 </div>
                </Col>
              ))
            }
          </Row>
        </Container>

        {/* for mobile and tablet views */}


        <Container className='mobile'>
          <Row>
          {
              dataForMobile.map((item)=>(
                <Col md={12} className='mob-image-col'>
                 <div className="mob-image-box">
                  <img src={item.img} alt="" className='mob-image'/>
                  <h1 className="mob-image-text">
                    {item.tit}
                  </h1>
                 </div>
                </Col>
              ))
            }
          </Row>
        
        
        
      </Container>

      </Container>
     <FooterPage/>
    </div>
  )
}

export default Creation