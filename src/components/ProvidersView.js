import React from 'react'
import providers from '../images/providers.png'
import Button from '../utils/Button'
export default function ProvidersView() {
  return (
    <div className='mb-10 mt-36 '>
            <div className='font flex justify-evenly flex-wrap lg:flex-nowrap'>
                <img className='h-50 w-72   md:w-1/3 md:h-96' src={providers} alt=''></img>
                <div className= 'mt-2 md:mt-7 ml-4'>
                    <h1 className='text-xl  md:text-4xl font-bold leading-10 mb-5'>Leading healthcare <br></br>providers</h1>
                    <hr color='black'  className='mt-6 w-7 md:w-12 border-black   '></hr>
                    <p className=' text-xs font md:text-xl font-light leading-8 mt-5 mb-10'>Trafalgar provides progressive, and affordable <br></br>
                    healthcare, accessible on mobile and online for <br></br>
                    everyone. To us, it's not just work. We take pride<br></br>in the solutions we deliver </p>
                    <Button btnText={'Learn more'}/>

                </div>
            </div>
            
        </div>
  )
}
