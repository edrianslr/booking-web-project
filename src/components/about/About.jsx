import React from 'react'
import "./about.css"
import DeliveryImg from "../../assets/aboutimg/delivery.png"
import TruckImg from "../../assets/aboutimg/truck_delivery.png"
import Services from "../../assets/aboutimg/customer-service.jpg"
import Overseas from "../../assets/aboutimg/overseas.jpg"

import {motion} from 'framer-motion'
import { fadeIn } from '../../variants'

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">About Me</h2>
      <span className='section_subtitle'>Booking Introduction</span>

      <div className="about_container container grid">
        <motion.div 
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="about_card">
            <div className="about_img">
                <img src={DeliveryImg} alt="About Image"/>
            </div>
            <div className="about_info">
                <h1 className="about_title">Delivery Fast Time</h1>
                <p className="about_subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                    amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis nato
                    quia nonummy nibh
                    id elit. Ut at sagittis magna. Praesent sit amet nulla auctor,
                </p>
            </div>
        </motion.div>

        <motion.div 
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="about_card">
            <div className="about_img">
                <img src={Services} alt="About Image"/>
            </div>
            <div className="about_info">
                <h1 className="about_title">Customer Services</h1>
                <p className="about_subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                    amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis nato
                    quia nonummy nibh
                    id elit. Ut at sagittis magna. Praesent sit amet nulla auctor,
                </p>
            </div>
        </motion.div>

        <motion.div 
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="about_card">
            <div className="about_img">
                <img src={TruckImg} alt="About Image"/>
            </div>
            <div className="about_info">
                <h1 className="about_title">Delivery Services</h1>
                <p className="about_subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                    amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis nato
                    quia nonummy nibh
                    id elit. Ut at sagittis magna. Praesent sit amet nulla auctor,
                </p>
            </div>
        </motion.div>

        <motion.div 
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="about_card">
            <div className="about_img">
                <img src={Overseas} alt="About Image"/>
            </div>
            <div className="about_info">
                <h1 className="about_title">Delivery Services</h1>
                <p className="about_subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                    amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis nato
                    quia nonummy nibh
                    id elit. Ut at sagittis magna. Praesent sit amet nulla auctor,
                </p>
            </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About