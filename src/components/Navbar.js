import React from 'react'
import '../App.css';
import { useState } from 'react';

export default function Navbar() {
    const [tab,setTab]=useState('home')
    const check=(tabID)=>
    {
      let prevID=document.getElementById(tab)
      prevID.classList.remove('tab')

      let id= document.getElementById(tabID)
      id.setAttribute('class','tab')
      setTab(tabID)
     
    }
    return (
        <>
            <div className='flex justify-evenly mt-4'>

                <div className='flex justify-start align-middle mr-24 '>
                    <div className='w-10 h-10 bg-blue-500 rounded-3xl text-center'>
                        <h1 className='text-white text-2xl pt-1 font '>T</h1>
                    </div>
                    <h1 className='ml-2 font font-bold text-2xl leading-10'>Trafalgar</h1>
                </div>
                <div className='pt-2 block lg:hidden'>
                    <div className='w-7 h-1  bg-black mt-1' ></div>
                    <div className='w-7 h-1 bg-black mt-1' ></div>
                    <div className='w-7 h-1 bg-black mt-1' ></div>
                </div>

                <div className='ml-32 w-1/3 mt-2 pt-1 hidden lg:block' >
                    <ul className='flex justify-between '>
                        <button onClick={()=>check('home')}>

                        <li id='home' className='tab  font text-xs md:mt-0 lg:text-lg'>Home</li>
                        </button>
                        <button onClick={()=>check('find')}>
                        <li id='find' className='font text-xs lg:text-lg'>Find a doctor</li>
                        </button>
                        <button onClick={()=>check('apps')}>
                        <li id='apps' className='font text-xs lg:text-lg' >Apps</li>
                        </button>
                        <button onClick={()=>check('testm')}>
                        
                        <li id='testm' className='font text-xs lg:text-lg'>Testimonials</li>
                        </button>
                        <button onClick={()=>check('about')}>
                        <li id='about' className='font text-xs lg:text-lg '>Aboout us</li>
                        </button>
                    </ul>
                </div>
            </div>
        
        </>
    )
}
