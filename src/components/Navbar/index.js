import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      
        <Link to="/" className='navItem'>
          <div className='title'>Home</div>

          <div className='iconCircle ms-auto me-2'></div>
        </Link>

        <Link to="/about" className='navItem'>
          <div>About Me</div>
          
          <div className='iconCircle ms-auto me-2'></div>
        </Link>

        <Link to="/skills" className='navItem'>
          <div>Skills</div>
        
          <div className='iconCircle ms-auto me-2'></div>
        </Link>

        <Link to="/services" className='navItem'>
          <div>Services</div>
          
          <div className='iconCircle ms-auto me-2'></div>
        </Link>

        <Link to="/portfolio" className='navItem'>
          <div>Portfolio</div>

          <div className='iconCircle ms-auto me-2'></div>
        </Link>
        
        <Link to="/contactme" className='navItem'>
          <div>Contact Me</div>
        
          <div className='iconCircle ms-auto me-2'></div>        
        </Link>
    </div>
  )
}

export default Navbar