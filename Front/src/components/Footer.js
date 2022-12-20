import React from 'react'
import './FooterStyles.css'

import {FaFacebook, FaLinkedin, FaGithub, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa'
import {RiTeamFill} from 'react-icons/ri'
function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
            
                <div className='left'>
                    <div className='location'>
                        <RiTeamFill size={20} style={{color: '#ffffff', marginRight: '2rem'}} />
                        <div>
                            <h5>NetEase Cloud</h5>
                            <p>ps3307, zz2980, rl3227, jy3166</p>
                            <p>yh3404, ws2685, sc5103</p>
                        </div>
                    </div>
    
                    {/* <div className='phone'>
                        <h4><FaPhone size={20} style={{color: '#ffffff', marginRight: '2rem'}}/>1-800-123-1234</h4>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={{color: '#ffffff', marginRight: '2rem'}}/>trips@galaxy.com</h4>
                    </div> */}
                </div>
                
                <div className='right'>
                    <h4>About this Project</h4>
                    <p>"A customized to-do list project."</p>
                    <div className='social'>
                        <FaGithub size={30} style={{color: '#ffffff', marginRight: '1rem'}}/>
                        <FaLinkedin size={30} style={{color: '#ffffff', marginRight: '1rem'}}/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Footer
