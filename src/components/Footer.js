import React from 'react'
import '../App.css'
import dots from '../images/dots.png'
export default function Footer() {
    return (
        <div className='footer-background mt-12 pt-4 md:pt-24'>
            <div className='block md:flex justify-evenly md:flex-wrap md:text-start text-center'>
                <div className='lg:m-0 m-10'>

                <div className='  flex md:justify-start align-middle justify-center md:mr-24 mb-5 '>
                    <div className=' w-10 h-10 bg-white rounded-3xl '>
                        <h1 className='text-blue-500 text-2xl pt-1 md:pl-3 font '>T</h1>
                    </div>
                    <h1 className='ml-2 font font-bold text-white text-2xl leading-10'>Trafalgar</h1>
                </div>
                    <p className='font text-xs md:text-base text-white font-light leading-7'>Trafalgar provides progressive, and affordable<br></br>
                        healthcare, accessible on mobile and online <br></br>
                        for everyone</p>
                        <p className='font text-xs md:text-xl text-white font-light mt-4'>©Trafalgar PTY LTD 2020. All rights reserved</p>
                </div>
            <div className='lg:m-0 m-10'>
                <h1 className='font text-white font-bold text-xl mt-4 md:mt-0 mb-4'>Company</h1>
                <h3 className='font text-white font-light text-xs md:text-base leading-9'>About</h3>
                <h3 className='font text-white font-light text-xs md:text-base leading-9'>Testimonials</h3>
                <h3 className='font text-white font-light text-xs md:text-base leading-9'>Find a doctor</h3>
                <h3 className='font text-white font-light text-xs md:text-base leading-9'>Apps</h3>
            </div>

            <div className='lg:m-0 m-10'>
                <h1 className='font text-white font-bold text-xl mt-4 md:mt-0 mb-4'>Region</h1>
                <h3 className='font text-white font-light text-xs md:text-base leading-9'>Indonesia</h3>
                <h3 className='font text-white font-light text-xs md:text-base leading-9'>Singapore</h3>
                <h3 className='font text-white font-light text-xs md:text-base leading-9'>Hongkong</h3>
                <h3 className='font text-white font-light text-xs md:text-base leading-9'>Canada</h3>
            </div>

            <div className='lg:m-0 m-10'>
                <h1 className='font text-white font-bold text-xl mt-4  md:mt-0 mb-4'>Help</h1>
                <h3 className='font text-white font-light text-xs md:text-base leading-9'>Help Center</h3>
                <h3 className='font text-white font-light text-xs md:text-base leading-9'>Contact Support</h3>
                <h3 className='font text-white font-light text-xs md:text-base leading-9'>Instructions</h3>
                <h3 className='font text-white font-light text-xs md:text-base leading-9'>How it works</h3>
            </div>
          
            </div>
            <img className='mt-2' src={dots} alt=''></img>
        </div>
    )
}
