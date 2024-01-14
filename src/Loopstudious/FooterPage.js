import React from "react";
import logo from "../Loopstudious/LoopstudioImages/svgs/logo.svg";
import fb from "../Loopstudious/LoopstudioImages/svgs/icon-facebook.svg";
import tw from "../Loopstudious/LoopstudioImages/svgs/icon-twitter.svg";
import ins from "../Loopstudious/LoopstudioImages/svgs/icon-instagram.svg";
import pin from "../Loopstudious/LoopstudioImages/svgs/icon-pinterest.svg";
import { Container } from "react-bootstrap";

const FooterPage = () => {
  return (
    <>
     <footer>
     <Container className="footer">
   
   <div className="last-one">
     <img src={logo} alt="" className="logo" />
     <ul className="footer-ul">
       <li className="foot-list">About</li>
       <li className="foot-list">Carrers</li>
       <li className="foot-list">Events</li>
       <li className="foot-list">Support</li>
       <li className="foot-list">Product</li>
     </ul>
   </div>

   <div className="footer-lists">
     <div className="icons">
       <img src={fb} alt="" id="icon" />
       <img src={tw} alt="" id="icon" />
       <img src={ins} alt="" id="icon" />
       <img src={pin} alt="" id="icon" />
     </div>
     <p className="copyrights">@2021 all rights are reserved</p>
   </div>


 
</Container>
     </footer>
    </>
  );
};

export default FooterPage;
