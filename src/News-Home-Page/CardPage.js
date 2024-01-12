import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

const CardPage = () => {
  const cardData = [
    {
    id:'01',
    img:require('../images/image-retro-pcs.jpg'),
    title:"Reviving PC s",
    desc:"What happens when old pc's are given modern updates"
  },
  {
    id:'02',
    title:"Top 10 laptops of 2022",
    img:require('../images/image-top-laptops.jpg'),
    desc:"Our best picks for various needs and budgets"
  },
  {
    id:'03',
    title:"The Growth of gaming",
    img:require('../images/image-gaming-growth.jpg'),
    desc:"How the pandamic has sparked best oppertunities"
  },

]
  return (
    <div>
      <Container className='mb-5'>
        <Row className='card-row'>
        {cardData.map((item)=>{
          return(
            <Col md={4} sm={6} xs={12} lg={4} xl={4} xxl={4} key={item.id}>
             <div className="card-box">
              <Image src={item.img} fluid className='card-img'/>
              <div className="next-box">
              <h1 className='card-id'>
                {item.id}
              </h1>
              <h4 className='card-title'>
                {item.title}
              </h4>
              <p className='card-desc'>
                {item.desc}
              </p>
              </div>
             </div>
             
            </Col>
          )
        })}
        </Row>
      </Container>
    </div>
  )
}

export default CardPage