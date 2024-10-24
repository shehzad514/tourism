import React from "react";
import "../Home/Home.css";
import { FaStar } from "react-icons/fa";
import image1 from "../Assests/image-1.svg";
import image2 from "../Assests/image-2.svg";
import image3 from "../Assests/image3.png";
import image4 from "../Assests/rec.png";
import AboutActivity from "../About_Activity/AboutActivity";
import Ride from "../Ride/Ride";
import Selection from "../Selection/Selection";
import WhyUs from "../WhyUs/WhyUs";
function Home() {
  return (
    <div className="home-sec">
      <div className="home-container">
        <div className="up-container">
          <div className="up-container-heading">
            <h3>
              Dubai Desert 4x4 Dune Bashing, Self-Ride 60min ATV Quad, Camel
              Ride,Shows,Dinner
            </h3>
          </div>

          <div className="up-container-rating">
            <FaStar className="ist-star" />
            <FaStar className="scnd-star" />
            <FaStar className="trd-star" />
            <FaStar className="frth-star" />
            <FaStar className="fith-star" />
            <h2>45 Reviews</h2>
          </div>
        </div>
        <div className="down-container">
          <div className="gallery-sec">
          <div className="gallery-left-sec">
      <div className="image-container">
        <img src={image1} alt="image1" className="image1" />
      </div>
      <div className="image-container">
        <img src={image2} alt="image2" className="image2" />
      </div>
      <div className="image-container">
        <img src={image3} alt="image3" className="image3" />
        <span className="show-more-text">Show more</span>
      </div>
    </div>

            <div className="gallery-right-sec">
              <img src={image4} alt="image4" className="image4" />
            </div>
          </div>

          {/* About this activity */}
          <div className="AboutActivity_home_sec">
            <AboutActivity/>
          </div>
        </div>

        <div className="below_sec">
            <div className="below_sec_left">
{/* Camel ride sec */}
<div className="Camel_ride_sec">
            <Ride/>
          </div>

           {/* Camel ride sec 2 */}
         <div className="Camel_ride_sec ">
            <Ride showmidlecontent={false}/>
          </div>
            </div>

            <div className="below_sec_right">
                <div className="below_sec_right_up">
                <Selection/>
                </div>

                <div className="below_sec_right_down">
                <WhyUs/>
                </div>
            </div>
        </div>

         
      </div>
    </div>
  );
}

export default Home;
