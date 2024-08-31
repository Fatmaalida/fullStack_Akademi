import React from 'react';
import './NavbarBelt.css';

import amazonLogoBlue from '../../../assets/amazonLogoBlue.jpeg';
import turkeyFlag from '../../../assets/turkeyFlagLogo.png';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'


const NavbarBelt = () => {

    const cartItems = useSelector((state) => state.cart.items)


    return (
        <div className='NavbarBelt'>
            <div className="leftNavBelt">
                <Link to={'/'} className="leftNavBeltLogo">
                    <img className='amazonLogoNavbar'
                        src={amazonLogoBlue}
                        alt="amazonLogo" />
                    <span className='navbar_inLogo'>.in</span>
                </Link>
                <div className="navbarBeltLocation">
                    <div className="navbarBeltLocationImg">
                        <LocationOnIcon
                            className='navbarBeltLocationImgIcon' sx={{ fontSize: "22px" }} />

                    </div>
                    <div className="navbarBeltLocationPlace">
                        <div className="navbarBeltLocationTop">Delivering to Turkey 343434</div>
                        <div className="navbarBeltLocationBottom"> Update Location</div>
                    </div>

                </div>

            </div>
            <div className="navbarBeltSearchBox">
                <div className="navbarBeltSearchDiv">
                    <div className="navbarBeltSearchBoxAll">
                        <div className="navbarBeltSearchBoxAllText">All</div>
                        <ArrowDropDownOutlinedIcon sx={{ fontSize: "20px" }} />
                    </div>

                    <input type="text" className='navbarBeltInputSearchBox' placeholder='Search Amazon.in' />
                    < div className="searchIconNavbarBelt">
                        <SearchIcon sx={{ fontSize: "26px" }} className='searchIconNavbarBeltIcon' />
                    </div>
                </div>

            </div>
            <div className="rightSideNavbarBelt">
                < div className="turkeyFlagCode">
                    <img className='turkeyFlag' src={turkeyFlag} alt="turkeyFlag" />
                    <div className="turkeyCodeNavbarBelt">TR <ArrowDropDownOutlinedIcon sx={{ fontSize: 16, marginTop: 1, marginLeft: -0.4 }} className='turkeyCodeNavbarBeltDrp' /></div>
                </div>

                <div className="helloSignInNavbarBelt">
                    <div className="helloTopNavbarBelt">Hello, User </div>
                    <div className="turkeyCodeNavbarBelt">Accounts & Lists </div>
                </div>

                <div className="helloSignInNavbarBelt">
                    <div className="helloTopNavbarBelt">Returns </div>
                    <div className="turkeyCodeNavbarBelt">& Orders </div>
                </div>

                <div className="helloSignInNavbarBelt">
                    <div className="helloTopNavbarBelt">Returns </div>
                    <div className="turkeyCodeNavbarBelt">& Orders </div>
                </div>

                <Link to={'/cart'} className="helloSignInNavbarBelt">
                    <span className='cartItemNumberNavbarBelt' >{cartItems.length}</span>
                    <div className="helloTopNavbarBelt"><ShoppingCartOutlinedIcon /><span className='cartTitle' >Cart</span></div>
                </Link>


            </div>
        </div>
    );
}

export default NavbarBelt;
