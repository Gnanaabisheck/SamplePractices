import React from 'react'
import logo from '../images/logo.svg'
import './News.css'
const HeaderBar = () => {
  return (
    <>
        <nav>
            <img src={logo} alt="" className='logo'/>
           <ul>
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