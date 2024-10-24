import React from 'react'
import '../Ride/Ride.css'
import { FaStar } from "react-icons/fa";
import camel from '../Assests/camel.png'
import { LuCalendarCheck } from "react-icons/lu";
import { PiClockCountdown } from "react-icons/pi";
import { MdOutlineHeadset } from "react-icons/md";
import reserve from '../Assests/reserve.svg'
import host from '../Assests/host.svg'
function Ride({showmidlecontent= true}) {
  return (
    <div className='ride_sec'>
    <div className='ride_container'>
        <div className='ride_left_cont'>
           <div className='ride_left_cont_image'>
            <img src={camel} alt='camel'/>
           </div>

           <div className='ride_left_cont_details'>
           <div className='ride_heading'>
           <h3>Camel Ride,Shows,Dinner</h3>
           </div>

           <div className="up-container-rating">
            <FaStar className="ist-star small_star" />
            <FaStar className="scnd-star small_star" />
            <FaStar className="trd-star small_star" />
            <FaStar className="frth-star small_star" />
            <FaStar className="fith-star small_star" />
          </div>

          <div className='ride_desc'>
            <ul>
                <li>Get yourself tickets to the award-winning Dubai Frame – 
                the world's largest picture frame and admire unbeaten views of the city</li>
                <li>On one side, you'll notice iconic landmarks of modern
                 Dubai, and on the other, you'll see older parts of the city.</li>
                 <li>On one side, you'll notice iconic landmarks of modern Dubai, 
                 and on the other, you'll see older parts of the city.</li>
            </ul>
          </div>
           </div>
        </div>

        {
            showmidlecontent && (
            <div className='ride_middle_cont'>

</div>
        )}
       

        <div className='ride_right_cont'>
        <div className='ride_reigt_cont_items'>
        <LuCalendarCheck className='icon' />
        <p className='activity_heading'>Free cancallation</p>
        </div>

        <div className='ride_reigt_cont_items'>
        <img src={reserve} alt='reserve' className='icon_pic'/>
        <p className='activity_heading'>Reserve now & pay later</p>
        </div>

        <div className='ride_reigt_cont_items'>
        <PiClockCountdown className='icon'/>
        <p className='activity_heading'>Duration 1 - 3 hours</p>
        </div>

        <div className='ride_reigt_cont_items'>
        <img src={host} alt='host' className='icon_pic'/>
        <p className='activity_heading'>Host or greeter</p>
        </div>

        <div className='ride_reigt_cont_items'>
        <MdOutlineHeadset className='icon'/>
        <p className='activity_heading'>Audio guide included</p>
        </div>

        <div className='ride_reigt_cont_price'>
            <p>Starting from</p>
            <h3>AED 69.00</h3>
        </div>

        <div className='ride_reigt_cont_btn'>
            <button  className='check_btn'>Check Availability</button>
        </div>
        </div>
    </div>
      
    </div>
  )
}

export default Ride
