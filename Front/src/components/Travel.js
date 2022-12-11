import React from 'react'
import { Link } from 'react-router-dom'
import './TravelStyles.css'

export const Travel = () => {
    return (
        <div className='travel'>
            <div className='card-container'>
                <div className='card'>
                    <h3>- Basic -</h3>
                    <span className='bar'></span>
                    <p className='btc'>Location</p>
                    <p>- Country -</p>
                    <p>- Plan Start -</p>
                    <p>- Plan End -</p>
                    <Link to='./schedule' className='btn'>Book</Link>
                </div>
                <div className='card'>
                    <h3>- Suite -</h3>
                    <span className='bar'></span>
                    <p className='btc'>Location</p>
                    <p>- Country -</p>
                    <p>- Plan Start -</p>
                    <p>- Plan End -</p>
                    <Link to='./schedule' className='btn'>Book</Link>
                </div>
                <div className='card'>
                    <h3>- Executive -</h3>
                    <span className='bar'></span>
                    <p className='btc'>Location</p>
                    <p>- Country -</p>
                    <p>- Plan Start -</p>
                    <p>- Plan End -</p>
                    <Link to='./schedule' className='btn'>Book</Link>
                </div>
            </div>
        </div>
    )
}

export default Travel
