import React from 'react'
import "./booking.css"
import Robot from "../../assets/robot.png"
import {motion} from 'framer-motion'
import { fadeIn } from '../../variants'

const Booking = () => {
  return (
    <section className="booking section" id="booking">
        <h2 className="section_title">Delivery Booking</h2>
        <span className='section_subtitle'>Booking Introduction</span>

        <img src={Robot} alt="" className='booking_robot' />
        
        <motion.div 
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="booking_container container grid">
          <h1 className="booking_title">Booking Form</h1>
          <form className="booking_form">
            <div className="form_group-name">
              <label htmlFor="name">
              Fullname
              </label>

              <i class="uil uil-user form_group-icon1"></i>

              <input type="text" name='name' className="form_control-name" id="name" placeholder="Enter your Fullname"/>
            </div>

            <div className="booking_form-group">
              <div className="form_group">
                <label htmlFor="email">
                  E-mail
                </label>

                <i class="uil uil-envelope form_group-icon"></i>

                <input type="email" name='email' className="form_control" id="email" placeholder="example@gmail.com"/>
              </div>

              <div className="form_group">
                <label htmlFor="contact">
                  Contact No.
                </label>

                <i class="uil uil-phone form_group-icon2"></i>

                <input type="text" name='contact' className="form_control" id="contact" placeholder="Contact No."/>
              </div>

              <div className="form_group">
                <label htmlFor="package">
                  Package details
                </label>

                <i class="uil uil-box form_group-icon3"></i>

                <select name='package' className="form_control" id="package">
                  <option value=""></option>
                  <option value="1">Option 1</option>
                  <option value="1">Option 1</option>
                  <option value="1">Option 1</option>
                </select>
              </div>

              <div className="form_group">
                <label htmlFor="shipping">
                  Shipping options
                </label>

                <i class="uil uil-truck form_group-icon4"></i>

                <select name='shipping' className="form_control" id="shipping">
                  <option value=""></option>
                  <option value="1">Option 1</option>
                  <option value="1">Option 1</option>
                  <option value="1">Option 1</option>
                </select>
              </div>

              <div className="form_group">
                <label htmlFor="pickupLoc">Pickup location</label>
                <i class="uil uil-map-marker form_group-icon5"></i>
                <input type="text" name='pickupLoc' className="form_control" id="pickupLoc" placeholder="Enter pickup location"/>
              </div>

              <div className="form_group">
                <label htmlFor="dropoffLoc">Drop-off location</label>
                <i class="uil uil-map-marker form_group-icon6"></i>
                <input type="text" name='dropoffLoc' className="form_control" id="dropoffLoc" placeholder="Enter dropoff location"/>
              </div>

              <div className="form_group-file">
                <label htmlFor="transNo">Transaction No.</label>
                <input type="file" name='transNo' className="form_control-file" id="transNo" placeholder="Upload Transaction"/>
              </div>

              <div className="form_group">
                <label htmlFor="payment">Payment methods</label>
                <i class="uil uil-credit-card form_group-icon7"></i>
                <select name='payment' className="form_control" id="payment">
                  <option className='form_select' value="">Please choose an payment method</option>
                  <option value="1">Option 1</option>
                  <option value="1">Option 1</option>
                  <option value="1">Option 1</option>
                </select>
              </div>
            </div>

            <button className='form_group-btn'>
            <i class="fa-solid fa-truck-fast btn-icon"></i>
            Book now
            </button>
          </form>
        </motion.div>
    </section>
  )
}

export default Booking