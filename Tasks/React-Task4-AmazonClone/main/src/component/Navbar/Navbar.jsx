import React from 'react'
import NavbarBelt from './NavbarBelt/NavbarBelt'
import NavbarBanner from './NavbarBanner/NavbarBanner'
import './Navbar.css'


const Navbar = () => {
    return (
        <div className='navbar'>
            <NavbarBelt />
            <NavbarBanner />
        </div>
    )
}

export default Navbar