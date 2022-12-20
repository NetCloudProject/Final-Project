import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import TravelCards from '../components/Travel'
import ShoppingForm from '../components/TravelPlanForm'
import StickyHeadTable from "../components/TravelPlanSticky"

const Travel = () => {
    return (
        <div>
            <Navbar/>
            <HeroImage heading='Travel.' text='Make your plan.'/>
            <TravelCards/>

            <StickyHeadTable/>
            <ShoppingForm />

            <Footer/>
        </div>
    )
}

export default Travel
