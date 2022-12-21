import React from 'react'

import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import Form from '../components/Form'
import StickyHeadTable from "../components/ScheduleSticky";
import ShoppingForm from "../components/ScheduleForm";

const Schedule = () => {
    return (
        <div>
            <Navbar/>
            <HeroImage heading='Schedule.' text='Schedule your travel today.'/>
            {/*<Form />*/}
            <StickyHeadTable/>
            <ShoppingForm />
            <Footer/>
        </div>
    )
}

export default Schedule