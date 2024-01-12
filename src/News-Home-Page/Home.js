import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import bannerImg from '../images/image-web-3-desktop.jpg'
const Home = () => {
  return (
    <div>
        <Container className='my-5'>
            <Row>
                <Col md={8} sm={12} xs={12} lg={8} xl={8} xxl={8}>
                <Image src={bannerImg} fluid className='banner-img'/>
                <Container className='my-4'>
                    <Row className='bright-row'>
                        <Col md={6} sm={12} xs={12} lg={6} xl={6} xxl={6}>
                        <h1 className="header-two">
                            The bright future of web 3.0 ?
                        </h1>
                        </Col>
                        <Col md={6} sm={12} xs={12} lg={6} xl={6} xxl={6}>
                         <p className='mb-4'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores ab, maxime numquam omnis eum laborum optio fugit a neque dolore corrupti.
                         </p>
                         <button className='read-more-btn mt-3'>
                            Read More
                         </button>
                        </Col>
                    </Row>
                </Container>
                </Col>
                <Col  md={4} sm={12} xs={12} lg={4} xl={4} xxl={4}>
                 <div className="box">
                    <h1 className="header mb-4" id='hilighted-text'>
                        New
                    </h1>
                    <h4>
                        Hydrogen vs Electric Cars
                    </h4>
                    <p>
                        Will hydrogen-fueled cars ever catch up to EV s
                    </p>
                    <hr className='my-4'/>
                    <h4 id='hilighted-text'>
                       The downside of AI Artistry
                    </h4>
                    <p>
                        What are the possible adverse efforts of the following community regarding the AI artistry
                    </p>
                    <hr className='my-4'/>
                    <h4>
                       Is VC funding drying up
                    </h4>
                    <p>
                        What are the possible adverse efforts for the following community regarding the AI artistry
                    </p>
                 </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Home