import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import ShoppingSection from '../components/Shopping'
import ShoppingForm from '../components/ShoppingForm'


export const Shopping = () => {

    return (
        <div>
            <Navbar/>
            <HeroImage heading='Shopping.' text='Shop your favorate.'/>
            {/*<ShoppingSection/>*/}
            <ShoppingForm />
            <Footer/>
        </div>
    )
}

export default Shopping
