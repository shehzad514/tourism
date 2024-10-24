import React, { useState } from "react";
import "../Selection/Selection.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CiCalendar } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
function Selection() {
  const [selectionDate, setselectionDate] = useState(null);

  const [adults, setAdults] = useState(2); // Default value 2 for Adults
  const [children, setChildren] = useState(0); // Default value 0 for Children
  const [infants, setInfants] = useState(0); // Default value 0 for Infants

  const handleChange = (date) => {
    setselectionDate(date);
  };

  const handleAdultsChange = (e) => {
    setAdults(e.target.value ? parseInt(e.target.value) : 0);
  };

  const handleChildrenChange = (e) => {
    setChildren(e.target.value ? parseInt(e.target.value) : 0);
  };

  const handleInfantsChange = (e) => {
    setInfants(e.target.value ? parseInt(e.target.value) : 0);
  };
  return (
    <div className="selction_sec">
      <div className="ride_reigt_cont_price select-price">
        <p>Starting from</p>
        <h3>AED 69.00</h3>
      </div>

      <div className="ride_reigt_cont_btn slct_btn">
        <button className="check_btn ch_btn">Check Availability</button>
      </div>

      <div className="ride_heading">
        <h3>Select Dates and travelers</h3>
      </div>

      <div className="selection_date">
        <CiCalendar />
        <DatePicker
          selected={selectionDate}
          onChange={handleChange}
          dateFormat="EEEE, MMM d, yyyy"
          placeholderText="Select Date"
          className="datepicker"
        />
      </div>

      <div className="selection_people">

      <div className="passenger-selector" >

      {/* Adults Input */}
      <div className="passenger_icon">
        <IoPersonOutline/>
      </div>
      <div className="inputs">
        <label htmlFor="adults">Adults</label>
        <input
          type="number"
          id="adults"
          value={adults}
          min="0"
          onChange={handleAdultsChange}
        />
      </div>

      {/* Children Input */}
      <div className="inputs">
        <label htmlFor="children">Children</label>
        <input
          type="number"
          id="children"
          value={children}
          min="0"
          onChange={handleChildrenChange}
        />
      </div>

      {/* Infants Input */}
      <div className="inputs">
        <label htmlFor="infants">Infants</label>
        <input
          type="number"
          id="infants"
          value={infants}
          min="0"
          onChange={handleInfantsChange}
        />
      </div>
     
    </div>
      </div>

      <div className="cancallaion_details">
      <FaRegCheckCircle className="checkbox" />
      <p className="can_p"><a href="#">Free Cancellation</a> up to 24 hours before experience starts (local time)</p>
      </div>
    </div>
  );
}

export default Selection;
