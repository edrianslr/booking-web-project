import React from 'react'
import "./review.css"
import Boyimg from "../../assets/reviewimg/boy.png"
import Girlblack from "../../assets/reviewimg/girl-black.png"
import BoyStraight from "../../assets/reviewimg/boy-straight.png"
import Girlimg from "../../assets/reviewimg/girl.png"

const Review = () => {
  return (
    <section className="review section" id="review">
      <h2 className="section_title">Customer Review</h2>
      <span className='section_subtitle'>Booking Introduction</span>

      <div className="review_container container grid">
        <div className="review_card">
            <div className="review_img">
                <img src={Boyimg} alt="review Image"/>
            </div>
            <div className="review_info">
                <h1 className="review_title">Juan Carlos</h1>
                <p className="review_star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half"></i>
                </p>
                <p className="review_subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                    amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis nato
                    quia nonummy nibh
                    id elit. Ut at sagittis magna. Praesent sit amet nulla auctor,
                </p>
            </div>
        </div>

        <div className="review_card">
            <div className="review_img">
                <img src={Girlblack} alt="review Image"/>
            </div>
            <div className="review_info">
                <h1 className="review_title">Jessica Fyang</h1>
                <p className="review_star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </p>
                <p className="review_subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                    amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis nato
                    quia nonummy nibh
                    id elit. Ut at sagittis magna. Praesent sit amet nulla auctor,
                </p>
            </div>
        </div>

        <div className="review_card">
            <div className="review_img">
                <img src={BoyStraight} alt="review Image"/>
            </div>
            <div className="review_info">
                <h1 className="review_title">Cardo Dalisay</h1>
                <p className="review_star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </p>
                <p className="review_subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                    amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis nato
                    quia nonummy nibh
                    id elit. Ut at sagittis magna. Praesent sit amet nulla auctor,
                </p>
            </div>
        </div>

        <div className="review_card">
            <div className="review_img">
                <img src={Girlimg} alt="review Image"/>
            </div>
            <div className="review_info">
                <h1 className="review_title">kim Berly</h1>
                <p className="review_star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half"></i>
                </p>
                <p className="review_subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                    amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis nato
                    quia nonummy nibh
                    id elit. Ut at sagittis magna. Praesent sit amet nulla auctor,
                </p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Review