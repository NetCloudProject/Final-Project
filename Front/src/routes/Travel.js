import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import TravelCards from '../components/Travel'

const Travel = () => {
    return (
        <div>
            <Navbar/>
            <HeroImage heading='Travel.' text='Make your plan.'/>
            <TravelCards/>
            <Footer/>
        </div>
    )
}

export default Travel
