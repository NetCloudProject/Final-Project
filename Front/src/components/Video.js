import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'


import homeVideo from '../assets/home.mp4'


const Video = () => {
    return (
        <div className='home'>
            <video autoPlay loop muted id='video'>
                <source src={homeVideo} type='video/mp4' />
            </video>
            
            <div className='content'>
                <h1>Travel, Shopping and Schedule.</h1>
                <p> Cloud Computing Project</p>
    
                <div>
                    <Link to='/travel' className='btn'>Travel</Link>
                    <Link to='/shopping' className='btn btn-light'>Shopping</Link>
                    <Link to='/schedule' className='btn btn-light'>Schedule</Link>
                </div>
            </div>
        </div>
    )
}

export default Video
