// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default () => {
    return (

        <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            autoplay
            pagination={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <div className="mainArea  absolute w-full top-0 z-50">
                <div className="heading text-center flex justify-center align-center flex-col">
                    <h1 className='text-6xl text-yellow-400 font-bold py-4 mt-12'>THE LARGE PIZZA SLICES</h1>
                    <h1 className='text-white text-6xl py-4'>NOW AVAILABLE IN YOUR CITY</h1>
                </div>
                <div className="buttons flex justify-center align-center my-8">
                    <button className='bg-yellow-600 text-white rounded-full p-4 mx-2'>BROWSE MENU</button>
                    <button className='bg-black text-white rounded-full p-4 mx-2'>SEE LOCATIONS</button>
                </div>
            </div>

            <SwiperSlide>
                <div className="image w-screen bg-black" style={{ height: '80vh', backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url('/images/1.jpg')" }}>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="image w-screen bg-black" style={{ height: '80vh', backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url('/images/2.jpg')" }}></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="image w-screen bg-black" style={{ height: '80vh', backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url('/images/3.jpg')" }}></div>
            </SwiperSlide>

        </Swiper>

    );
};