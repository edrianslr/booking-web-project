import React from 'react'
import "./home.css"
import Data from './Data'
import {motion} from 'framer-motion'
import { fadeIn } from '../../variants'

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home_container container grid">
                <motion.div 
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                
                className="home_content grid">
                    <div className="home_img"></div>
    
                    <Data />
                </motion.div>
            </div>
        </section>
      )
}

export default Home