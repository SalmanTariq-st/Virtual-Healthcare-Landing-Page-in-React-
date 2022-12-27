import React from 'react'
import landingPic from '../images/landingPhoto.png'
import '../App.css';
import dots from '../images/dots2.png'

export default function MainView() {
    return (
        <div>
            <img className='mt-8 mb-2 md:mb-0 md:mt-10 w-14 md:w-24' src={dots} alt=''></img>
            
            <div className=' font flex justify-evenly flex-wrap-reverse lg:flex-nowrap'>
                <div className= 'mt-5 md:mt-10 ml-4'>
                    <h1 className='text-xl  md:text-4xl font-bold leading-10 mb-5'>Virtual healthcare<br></br> for you</h1>
                    <p className=' text-sm font md:text-xl font-light leading-8'>Trafalgar provides progressive, and affordable<br></br>
                        healthcare, accessible on mobile and online<br></br>
                        for everyone</p>
                    <button className='text-sm mt-7 md:mt-10 bg-blue-500 w-36 md:w-52 h-14 font text-white md:text-lg rounded-full align-middle font-bold '>Consult today</button>
                </div>
                <img className='h-50 w-80   lg:w-1/3 lg:h-96' src={landingPic} alt=''></img>
            </div>
            
        </div>
    )
}
