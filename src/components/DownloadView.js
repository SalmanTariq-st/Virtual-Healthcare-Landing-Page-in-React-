import React from 'react'
import download from '../images/downloadImage.png'
import Button from '../utils/Button'
export default function DownloadView() {
    return (
        <div className='mb-10 mt-36 '>
            <div className='font flex justify-evenly flex-wrap-reverse lg:flex-nowrap'>
                <div className='mt-5 md:mt-10 ml-4'>
                    <h1 className='text-xl  md:text-4xl font-bold leading-10 mb-5'>Download our
                        <br></br>mobile apps</h1>
                    <hr color='black' className='mt-6 w-7 md:w-12 border-black   '></hr>
                    <p className=' text-xs font md:text-xl font-light leading-8 mt-5 mb-10'>Our dedicated patient engagement app and  <br></br>
                    web portal allow you to access information  <br></br>
                    instantaneously (no tedeous form, long calls,<br></br>or administrative hassle) and securely </p>
                    <Button btnText={'Download'}/>
                </div>
                <img className='h-50 w-72   md:w-1/3 md:h-96' src={download} alt=''></img>
            </div>
            

        </div>
    )
}
