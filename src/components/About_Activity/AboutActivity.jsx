import React from 'react'
import '../About_Activity/AboutActivity.css'
import { LuCalendarCheck } from "react-icons/lu";
import { PiClockCountdown } from "react-icons/pi";
import { MdOutlineHeadset } from "react-icons/md";
import reserve from '../Assests/reserve.svg'
import host from '../Assests/host.svg'
function AboutActivity() {
  return (
    <div className='about_activity-sec'>
      <div className='about_activity-container'>
        <section className='about_activity_heading'>
            <h2>About this activity</h2>
        </section>

        <section className='about_activity_items'>
            <div className='about_activity_item_detail'>
            <LuCalendarCheck className='icon' />
            <div className='cancel_detail'>
                <p className='activity_heading'>Free cancallation</p>
                <p className='activity_p'>Cancel up to 24 hours in advance for a full refund</p>
            </div>
            </div>

            <div className='about_activity_item_detail'>
            <img src={reserve} alt='reserve' className='icon_pic'/>
            <div className='reserve_detail'>
                <p className='activity_heading'>Reserve now & pay later</p>
                <p className='activity_p'>Keep your travel plans flexible — book your spot and pay nothing today</p>
            </div>
            </div>

            <div className='about_activity_item_detail'>
            <PiClockCountdown className='icon'/>
            <div className='duration_detail'>
                <p className='activity_heading'>Duration 1 - 3 hours</p>
                <p className='activity_p'>Check availability to see starting times.</p>
            </div>
            </div>

            <div className='about_activity_item_detail'>
            <img src={host} alt='host' className='icon_pic'/>
            <div className='hsot_detail'>
                <p className='activity_heading'>Host or greeter</p>
                <p className='activity_p'>English</p>
            </div>
            </div>

            <div className='about_activity_item_detail'>
            <MdOutlineHeadset className='icon'/>
            <div className='audio_detail'>
                <p className='activity_heading'>Audio guide included</p>
                <p className='activity_p'>English</p>
            </div>
            </div>
        </section>
      </div>
    </div>
  )
}

export default AboutActivity
