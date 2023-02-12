import React from 'react'
import { Link } from 'react-router-dom'
import { TbBrandNetflix } from 'react-icons/tb'
import '../Css/Navbar.css'
import '../App.css'
function Navbar() {
  return (
    <>
      <div id="nav-bar">
        <nav className="nav">
          <TbBrandNetflix id='logo' />
          <ul className='ul'>
            <Link to='/' className='nav-link'>
              <li>Movies</li>
            </Link>
            <Link to='/tv' className='nav-link'>
              <li>Tv Shows</li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar