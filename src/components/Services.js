import React from 'react'

import '../App.css'
export default function Services(props) {
  return (
    <div className='bg-white w-80 h-72 mb-10 ml-0 md:ml-10 rounded-lg shadow'>
      <div className='pt-8 ml-8'>
<div className='mb-4 h-20 md:h-24' >

     <img className=' w-10 md:w-16 ' src={props.img} alt=''></img>
</div>
     <div>
      <h1 className='font font-bold text-xl md:text-2xl leading-relaxed '>{props.heading}</h1>
      <p className='leading-7 font font-light'>{props.text}</p>
      </div>
     </div>
    </div>
  )
}
