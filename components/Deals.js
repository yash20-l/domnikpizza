import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode, Autoplay } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Deals = () => {

  const params = {
    modules: [FreeMode, Pagination, Autoplay],
    slidesPerView: 3,
    spaceBetween: 250,
    freeMode: true,
    pagination: true,
    loop: true,
    autoplay: true,
  }


  return (
    <div className="deals px-8">
      <div className="heading py-8">
        <h1 className='text-2xl font-bold align-left'>Deals And Offers</h1>
      </div>
      <div className="dealsSlider py-4">
        <Swiper {...params} >
          <SwiperSlide>
            <div className="box h-56  rounded-xl" style={{ backgroundImage: "url('/dealsslider/1.jpg')", width: '30rem', backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box h-56  rounded-xl" style={{ backgroundImage: "url('/dealsslider/2.jpg')", width: '30rem', backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box h-56  rounded-xl" style={{ backgroundImage: "url('/dealsslider/3.jpg')", width: '30rem', backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box h-56  rounded-xl" style={{ backgroundImage: "url('/dealsslider/4.jpg')", width: '30rem', backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box h-56  rounded-xl" style={{ backgroundImage: "url('/dealsslider/5.jpg')", width: '30rem', backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Deals