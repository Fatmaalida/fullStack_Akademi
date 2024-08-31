import React from 'react'
import './homeScreen.css'
import HomeBanner from './HomeBanner/homeBanner.jsx'
import HomeDetails from './HomeDetails/homeDetails.jsx'
// import Footer from '../../component/Footer/footer.jsx'

const HomeScreen = () => {
    return (
        <div className="homeScreen">
            <HomeBanner />
            <HomeDetails />
            {/* <Footer /> */}
        </div>
    )
}

export default HomeScreen