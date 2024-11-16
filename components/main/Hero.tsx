import React from 'react'
import Herocontent from '../sub/Herocontent'

const Hero = () => {
    return (
        <div id='about-me' className='relative flex flex-col h-full w-full'>
            <video autoPlay muted loop className='rotate-100 absolute top-[-330px] left-0 z-[1] w-full h-full object-cover'>
                <source src='/blackhole.webm' type='video/webm' />
            </video>

            <Herocontent />
        </div>
    )
}

export default Hero