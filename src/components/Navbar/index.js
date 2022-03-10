import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      
        <Link to="/" className='navItem'>
          <div className='title'>Home</div>

          <div className='iconCircle ms-auto me-3'>

          </div>
        </Link>
        <Link to="/about" className='navItem'>About Me</Link>
        <Link to="/skills" className='navItem'>Skills</Link>
        <Link to="/services" className='navItem'>Services</Link>
        <Link to="/portfolio" className='navItem'>Portfolio</Link>
        <Link to="/contactme" className='navItem'>Contact Me</Link>
    </div>
  )
}

export default Navbar