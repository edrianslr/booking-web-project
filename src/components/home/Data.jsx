import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '../../variants'

const Data = () => {
  return (
    <motion.div 
    variants={fadeIn("right", 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.7 }}
    className="home_data">
        <h1 className="home_title">Experience a new dimension of booking technology
        </h1>

        <p className="home_description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus totam est cumque, esse ea ab mollitia earum ut sit corporis ipsum, qui reprehenderit sint nobis, sed illo fugiat! Alias, amet.</p>

        <a href="#" className="button button--flex">Book now 
            <i className="fa-solid fa-truck-fast button_icon"></i>
        </a>

        <a href="#" className="btn btn--flex">Learn more
            <i className="fa-solid fa-arrow-right button_icon"></i>
        </a>
    </motion.div>
  )
}

export default Data