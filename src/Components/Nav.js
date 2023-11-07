  import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import { useState } from 'react'

const Nav = () => {
 function Hamburger(){}
  const [menuopen, setmenuopen] = useState(false)
  const toggleMenu=()=>{
    setmenuopen(!menuopen)
  }
  return (
    <>
    <nav className='main-nav'>
        
        <NavLink to='/'>
        <img  src='./images/logo.png.webp' className='logo1' alt='logo' />
        </NavLink>
        <div className={`ham ${menuopen ? "open" : " "}`}>
        
        <i class="fa-solid fa-bars-staggered" id='hamicon' onClick={toggleMenu}></i>
        
            
            <ul className= {menuopen ? "open": ""} id='navcom'>
             <ul className='navbar-list'>
                <li><NavLink to="/">HOME</NavLink></li>
                <li><NavLink to="/shop">SHOP</NavLink></li>
                <li><NavLink to="/sale">SALE</NavLink></li>
                <li><NavLink to="/page">PAGE</NavLink></li>
                <li><NavLink to="/blog">BLOG</NavLink></li>
              <div className='shoplogo'>
                <li className='cartlogo'><NavLink to="/cart"><i class="fa-solid fa-cart-shopping"></i></NavLink></li>
                <li><NavLink to="/login"><i class="fa-regular fa-user"></i></NavLink></li>
                </div>

              </ul>






            </ul>
          </div>
            
            
          
    </nav>
    </>
  
  )
}

export default Nav