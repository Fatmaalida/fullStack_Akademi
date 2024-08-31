import React from 'react'
import './NavbarBanner.css'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import {Link } from 'react-router-dom'

const NavbarBanner = () => {
    const options = [
        { "name": "Fresh" },
        { "name": "Amazon miniT" },
        { "name": "Sell" },
        { "name": "Best Sellers" },
        { "name": "Today's Deals" },
        { "name": "Mobiles" },
        { "name": "Electronics" },
        { "name": "Prime" },
        { "name": "Customer Services" },
        { "name": "Fashion" },
        { "name": "Home & Kitchen" },
        { "name": "Registry" },
        { "name": "Gift Cards" }

    ]

    return (
        <div className="navbarBanner">
            <div className="navbarBannerOptionsLeft">
                <div className="optionsNavbarBanner">
                    <MenuOutlinedIcon sx={{ fontSize: "24px" }} />
                    <div className="allOptionsNavbarBanner">All</div>
                </div>

                {
                    options.map((item, index) => (
                        <Link to={'/products'} className="optionsNavbarBanner" key={index}>
                            <div className="allOptionsNavbarBanner">{item.name}</div>
                        </Link>
                    ))
                }

                {/* <div className="optionsNavbarBanner">
                    <div className="allOptionsNavbarBanner">Fresh</div>
                </div>
                <div className="optionsNavbarBanner">
                    <div className="allOptionsNavbarBanner">Amazon miniT</div>
                </div>
                <div className="optionsNavbarBanner">
                    <div className="allOptionsNavbarBanner">Sell</div>
                </div>
                <div className="optionsNavbarBanner">
                    <div className="allOptionsNavbarBanner">Best Sellers</div>
                </div>
                <div className="optionsNavbarBanner">
                    <div className="allOptionsNavbarBanner">Today's Deals</div>
                </div>
                <div className="optionsNavbarBanner">
                    <div className="allOptionsNavbarBanner">Mobiles</div>
                </div>
                <div className="optionsNavbarBanner">
                    <div className="allOptionsNavbarBanner">Electronics</div>
                </div>
                <div className="optionsNavbarBanner">
                    <div className="allOptionsNavbarBanner">Prime</div>
                </div>
                <div className="optionsNavbarBanner">
                    <div className="allOptionsNavbarBanner">Customer Services</div>
                </div>
                <div className="optionsNavbarBanner">
                    <div className="allOptionsNavbarBanner">Fashion</div>
                </div>
                <div className="optionsNavbarBanner">
                    <div className="allOptionsNavbarBanner">Home & Kitchen</div>
                </div>
                <div className="optionsNavbarBanner">
                    <div className="allOptionsNavbarBanner">Registry</div>
                </div>
                <div className="optionsNavbarBanner">
                    <div className="allOptionsNavbarBanner">Gift Cards</div>
                </div> */}

            </div>
            <div className="navbarBannerOptionsRightSide">
                {/* <img src="" alt="amazonPrime Logo" /> */}

            </div>

        </div>
    )
}

export default NavbarBanner