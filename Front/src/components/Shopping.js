import React from 'react'
import './ShoppingStyles.css'
import { Link } from 'react-router-dom'


import Shop from '../assets/shopping.jpg'


const Shopping = () => {
    return (
        <div className='shopping'>
            <div className='left'>
                <h1>Shopping</h1>
                <p>Sample shopping micro services.</p>
                {/* <Link to='/contact'><button className='btn'>Contact</button></Link> */}
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Shop} className='img' alt=''/>
                    </div>
                    <div className='image-stack bottom'>
                        <img src={Shop} className='img' alt=''/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shopping