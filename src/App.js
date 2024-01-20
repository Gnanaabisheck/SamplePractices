import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import ban from './images/image-web-3-desktop.jpg'
import logo from './images/icon-menu.svg'
import { RiLayoutGridFill } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { Col, Container, Image, Row } from "react-bootstrap";
import bigImg from './Loopstudious/LoopstudioImages/desktop/image-hero.jpg'
const App = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const trending = [
    {
    id:1,
    img:require('./Loopstudious/LoopstudioImages/desktop/image-fisheye.jpg'),
    title:"Telegram",
    subtitle:"Simentanously",
    status :"Downloaded"
  },
  {
    id:2,
    img:require('./Loopstudious/LoopstudioImages/desktop/image-from-above.jpg'),
    title:"Telegram",
    subtitle:"Simentanously",
    status :"Not Downloaded"
  },
  {
    id:3,
    img:require('./Loopstudious/LoopstudioImages/desktop/image-night-arcade.jpg'),
    title:"Telegram",
    subtitle:"Simentanously",
    status :"Downloaded"
  },
  {
    id:4,
    img:require('./Loopstudious/LoopstudioImages/desktop/image-soccer-team.jpg'),
    title:"Telegram",
    subtitle:"Simentanously",
    status :"Downloaded"
  },
  
]

const topApps = [
  {
  id:1,
  url:require('./images/image-gaming-growth.jpg'),
  text:"Streches",
  cat:"Horror",
  status:"Downloaded"
},
{
  id:2,
  url:require('./images/image-retro-pcs.jpg'),
  text:"Streches",
  cat:"Thriller",
  status:"Pending"
},
{
  id:3,
  url:require('./images/image-top-laptops.jpg'),
  text:"Streches",
  cat:"Adventure",
  status:"Pending"
},

]
  return (
    <div>
     
       <img src={logo} alt=""  onClick={handleShow} className="off-button"/>
      

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> <img src={logo} alt="" className="logo-img"/>Appstore</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <ul>
          <li>
            <RiLayoutGridFill/> Overview
          </li>
          <li>
            <RiLayoutGridFill/> Arcade
          </li>
          <li>
            <RiLayoutGridFill/> Charts
          </li>
          <li>
            <IoSettings/> Settings
          </li>
          <li>
            <RiLayoutGridFill/> Updates
          </li>
         </ul>
        </Offcanvas.Body>
      </Offcanvas>
      <Container fluid className="mt-4">
        <Row>
          <Col md={2}>
          <ul className="slider">
         <li>
         <img src={logo} alt="" className="logo-img"/>Appstore
         </li>
          <li>
            <RiLayoutGridFill/> Overview
          </li>
          <li>
            <RiLayoutGridFill/> Arcade
          </li>
          <li>
            <RiLayoutGridFill/> Charts
          </li>
          <li>
            <IoSettings/> Settings
          </li>
          <li>
            <RiLayoutGridFill/> Updates
          </li>
         </ul>
          </Col>
          <Col md={12} lg={7}>
            <Image src={bigImg} fluid className="banner-img"/>
            <Row className="mt-3">
              <h3 className="my-3">
                Top Apps & Games
              </h3>
              {
                topApps.map((app)=>{
                  return(
                    <Col md={4}className="image-card">
                  <div className="cards">
                  <img src={app.url} className="topapp-img"/>
                    
                    <p className="heading">
                      {app.text}
                    </p>
                    <div className="side-text">
                      <p className="cat">
                        {app.cat}
                      </p>
                      <button className={`${app.status==="Downloaded" ? "status" :"not"}`}>
                        {app.status}
                      </button>
                    </div>
                  </div>
                    
                    </Col>
                  )
                })
              }
            </Row>
          </Col>
          <Col lg={3} md={12}>
          
          <div className="trending-main my-3" >
            <div className="trending-title">
              <h3>
                Trending
              </h3>
              <button className="showall">
                Show all
              </button>
            </div>
          {
            trending.map((item)=>{
              return(
                <div className="trending">
                    <img src={item.img} alt="" className="app-img"/>
                 <div className="text">
                    <p className="title">{item.title} </p>
                    <p className="blur-text">{item.subtitle} </p>
                 </div>
                 <button className={`${item.status==="Downloaded" ? "status":"not"}`}>
                  {item.status}
                 </button>
                  </div>
              )
            })
           }
          </div>
          <Image  src={ban}  fluid className="ban mt-4"/>
          
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
