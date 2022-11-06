import React, { useState } from 'react'
import logo from '../shared/logo.svg'
import menu from '../shared/icon-hamburger.svg'
import close from '../shared/icon-close.svg'
import { links } from '../link'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../contex'
function Navbar() {
  const { sidebar, toggleSidebar, linkRef } = useGlobalContext()
  return (
    <>
      <header>
        <nav className='navbar'>
          <Link to='/' className='logo-container'>
            <img src={logo} alt='logo' />
          </Link>
          <div className='lined'></div>
          <button className='btn' onClick={toggleSidebar}>
            <img src={menu} alt='menu' />
          </button>
          <div className='nav-desktop'>
            <ul className='navLinks-desk'>
              {links.map((item) => {
                const { id, text, url } = item
                return (
                  <li className='list' key={id}>
                    <Link className='links-content' to={url}>
                      {text}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={` ${sidebar ? 'links show' : 'links'}`}>
            <button className='close' onClick={toggleSidebar}>
              <img src={close} alt='close' />
            </button>
            <ul className='nav-links'>
              {links.map((link) => {
                const { id, text, url } = link
                return (
                  <li key={id}>
                    <Link className='link-single' to={url}>
                      {text}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
