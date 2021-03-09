import React from 'react';
import NavbarContainer from './Navbar/NavbarContainer';
import ImageSlider from './ImageSlider';
import HomePageProductContainer from '../../components/HomePageProduct/HomePageProductContainer';
import Footer from './Footer';

function LandingPage() {
    return (
        <>
        <NavbarContainer/>
        <div className="container-fluid px-0">
            <ImageSlider/>
            <HomePageProductContainer/>
            <Footer/>
        </div>
        </>
    )
}

export default LandingPage;