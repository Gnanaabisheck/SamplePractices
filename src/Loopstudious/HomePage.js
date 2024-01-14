import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Loop.css'
import logo from '../Loopstudious/LoopstudioImages/svgs/logo.svg'
import ContentPage from './ContentPage'
import clbtn from '../Loopstudious/LoopstudioImages/svgs/icon-close.svg'
import Creation from './Creation'
import FooterPage from './FooterPage'
import menu from '../Loopstudious/LoopstudioImages/svgs/icon-hamburger.svg'
import CreationHeader from './CreationHeader'
const HomePage = () => {
    const[show,setShow]=useState(false)
  return (
    <>
        <div className="headerPage">
        <Container className='mb-5'>
            <nav className='loop-nav-bar'>
                <img src={logo} alt="" className='logo-img'/>
                <img src={menu} alt="" className="menu" onClick={()=>setShow(true)}/>
               
                <ul className={`lists ${show ? "show":""}`}>
                <div className="for-mobile">
                    <img src={logo} alt="" />
                    <img src={clbtn} alt="" onClick={()=>setShow(false)}/>
                </div>
                    <li>
                        About 
                    </li>
                    <li>
                        Carrers 
                    </li>
                    <li>
                        Event 
                    </li>
                    <li>
                        Product 
                    </li>
                    <li>
                        Support 
                    </li>
                </ul>
            </nav>
            <Row className='content-row'>
                <Col md={7} sm={12} xs={12} lg={7} xl={7} xxl={7}>
                <div className="content">
                    <h1 className="content-text">
                        immersive <br /> experiences <br />that deliver
                    </h1>
                </div>
                </Col>
            </Row>
        </Container>
        <ContentPage/>
        <CreationHeader/>
        <Creation/>
        </div>
    </>
  )
}

export default HomePage