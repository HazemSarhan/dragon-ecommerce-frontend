import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import hero1 from '@/assets/hero1.png';
import hero2 from '@/assets/hero2.png';
import hero3 from '@/assets/hero3.png';
import hero4 from '@/assets/hero4.png';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  const heroImages = [hero1, hero2, hero3, hero4];

  return (
    <>
      <section className="px-6 py-12 mx-auto container">
        <Swiper
          navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper rounded-lg shadow-lg"
        >
          {heroImages.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={image} alt="hero-image" className="w-full h-auto" />
              </SwiperSlide>
            );
          })}

          <button className="custom-prev absolute left-4 top-1/2 z-20 -translate-y-1/2 bg-white dark:bg-zinc-800 shadow-md p-2 rounded-full text-xl hover:bg-red-500 hover:text-white transition">
            <FaArrowLeft />
          </button>

          <button className="custom-next absolute right-4 top-1/2 z-20 -translate-y-1/2 bg-white dark:bg-zinc-800 shadow-md p-2 rounded-full text-xl hover:bg-red-500 hover:text-white transition">
            <FaArrowRight />
          </button>
        </Swiper>
      </section>
    </>
  );
};

export default Hero;
