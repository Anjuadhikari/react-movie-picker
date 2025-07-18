import React from 'react'
import { Link } from 'react-router-dom'
import '../css/NavBar.css'

export default function NavBar() {
  return (
    <nav className='navbar'>
        <div className='navbar-brand'>
           <Link to ="/">Movie App</Link>
        </div>
        <div className='navbar-links'>
            <Link to="/Home">Home</Link>
            <Link to="/favourites">Favourites</Link>
        </div>
    </nav>
  )
}
