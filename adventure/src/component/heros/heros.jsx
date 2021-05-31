import React from 'react'
import Button from '../button/button'
import './heros.css'
const Heros=()=>{

    return(
        <div className="hero-container">
            <video src="../../videos/video-2.mp4" autoPlay loop muted/>
            <h1>ADVENTURE AWAITS</h1>
            <P>what are you waiting for?</P>
            <div className="hero-btns">
                <Button className="btns" buttonstyle="btn-outline" buttonsize="btn-large">GET STARTED</Button>
                <Button className="btns" buttonstyle="btn-primary" buttonsize="btn-large">WATCH TRAILER <i className='fas fa-play-circle'></i></Button>

            </div>
        </div>
    )
}

export default Heros

