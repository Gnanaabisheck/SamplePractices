import React, { useState } from 'react'
import logo from '../images/logo.svg'
import menu from '../images/icon-menu.svg'
import './News.css'
import closeBtn from '../images/icon-menu-close.svg'
const HeaderBar = () => {
    const[view,setView]=useState(false)

  return (
    <>
        <nav className='nav-bar'>
            <img src={logo} alt="" className='one-logo'/>
            <img src={menu} alt="" className='menu' onClick={()=>{setView(true)}}/>
           <ul className={view ? "slider":null}>
            <img src={closeBtn} alt="" className="close" onClick={()=>{setView(false)}}/>
            <li>
                Home
            </li>
            <li>
                New
            </li>
            <li>
                Popular
            </li>
            <li>
                Trending
            </li>
            <li>
                Categories
            </li>
           </ul>
        </nav>
    </>
  )
}

export default HeaderBar