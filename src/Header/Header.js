import React from 'react'
import { Link } from 'react-router-dom';

const Header = ({ favoritesLength }) => {
  return (
    <header className='app-header'>
      <h1>LIGHT<span className='header-accent-color'>SIDE</span></h1>
      <Link to='/' className='header-btn home-btn'>Home</Link>
      <Link to='/favorites' className='header-btn fav-btn'>Favorites <span className="fav-length">({favoritesLength})</span></Link>
    </header>
  )
}

export default Header;
