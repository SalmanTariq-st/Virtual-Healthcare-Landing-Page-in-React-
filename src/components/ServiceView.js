import React from 'react'
import '../App.css';
import Services from './Services';
import search from '../images/searchDoc.png'
import pharma from '../images/pharma.png'
import consult from '../images/consult.png'
import details from '../images/details.png'
import emergency from '../images/emergency.png'
import tracking from '../images/tracking.png'
import Button from '../utils/Button';

export default function ServiceView() {
    return (
        <div className='mt-20'>
            <center>
                <h1 className='font text-lg md:text-3xl font-bold'>Our services</h1>
                <hr color='black' className='mt-3 w-5 md:w-12 border-black   '></hr>
            </center>
            <center>

                <p className='font mt-5 text-xs w-56 lg:w-full md:text-xl'>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment
                    <br></br>with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
            </center>
            <div>

                <div className='mt-14 flex justify-center flex-wrap'>
                    <Services img={search} heading={'Search doctor'} text={['Choose your doctor from thousands', <br></br>, 'of specialist, general, and trusted', <br></br>, 'hospitals']} />
                    <Services img={pharma} heading={'Online pharmacy'} text={['Buy your medicines with our ', <br></br>, 'mobile application with a simple ', <br></br>, 'delivery system']} />
                    <Services img={consult} heading={'Consultation'} text={['Free consultation with our trusted ', <br></br>, 'doctors and get the best ', <br></br>, 'recomendations']} />
                </div>
                <div className='flex justify-center flex-wrap'>
                    <Services img={details} heading={'Details info'} text={['Free consultation with our trusted', <br></br>, 'doctors and get the best', <br></br>, 'recomendations']} />
                    <Services img={emergency} heading={'Emergency care'} text={['You can get 24/7 urgent care for', <br></br>, 'yourself or your children and you', <br></br>, 'lovely family']} />
                    <Services img={tracking} heading={'Tracking'} text={['Track and save your medical history', <br></br>, 'and health data']} />
                </div>
            </div>
            <center className='mt-12'>
                <Button btnText={'Learn more'} />
            </center>
        </div>
    )
}
