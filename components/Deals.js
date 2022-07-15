import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode, Autoplay } from 'swiper';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link"
import "swiper/css";
import "swiper/css/free-mode";
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Deals = () => {

  const params = {
    modules: [FreeMode, Pagination, Autoplay],
    slidesPerView: 3,
    spaceBetween: 250,
    pagination: true,
    loop: true,
    autoplay: true,
  }

  const respon = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };



  return (
    <div className="deals px-4">
      <div className="heading py-8">
        <h1 className='text-2xl font-bold align-left'>Our Most Popular Deals</h1>
      </div>
      <div className="dealsSlider py-4">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive = {respon}
        >
          <div className="box h-56 rounded-xl" style={{ backgroundImage: "url('/dealsslider/1.jpg')", width: '26rem', backgroundPosition: 'center', backgroundSize: 'cover', cursor:"pointer" }}></div>
          <div className="box h-56  rounded-xl" style={{ backgroundImage: "url('/dealsslider/2.jpg')", width: '26rem', backgroundPosition: 'center', backgroundSize: 'cover', cursor:"pointer" }}></div>
          <div className="box h-56  rounded-xl" style={{ backgroundImage: "url('/dealsslider/3.jpg')", width: '26rem', backgroundPosition: 'center', backgroundSize: 'cover', cursor:"pointer" }}></div>
          <div className="box h-56  rounded-xl" style={{ backgroundImage: "url('/dealsslider/4.jpg')", width: '26rem', backgroundPosition: 'center', backgroundSize: 'cover', cursor:"pointer" }}></div>
          <div className="box h-56  rounded-xl" style={{ backgroundImage: "url('/dealsslider/5.jpg')", width: '26rem', backgroundPosition: 'center', backgroundSize: 'cover' , cursor:"pointer"}}></div>
        </Carousel>
      </div>
      <Link href={'/order/deals'}><div className="dealsBtn w-full h-16">
        <button className='w-full h-full bg-red-500 rounded-xl my-4  p-4 text-2xl text-white'>See All Deals</button>
      </div></Link>
    </div>
  )
}

export default Deals