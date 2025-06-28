import { UserIcon } from 'lucide-react';
import { FaStar } from 'react-icons/fa';
import { testimonials } from '@/data';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Button } from './ui/button';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { PiStarFourFill } from 'react-icons/pi';

const Testimonials = () => {
  const swiperRef2 = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (swiperRef2.current && swiperRef2.current.swiper) {
      setTimeout(() => {
        swiperRef2.current.swiper.update();
      }, 100);
    }
  }, []);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <section className="mx-auto container px-8 py-12">
      <div className="w-full  mx-auto shadow-lg rounded-xl overflow-hidden bg-white">
        <Swiper
          // slidesPerView={'4'}
          ref={swiperRef2}
          onSlideChange={handleSlideChange}
          spaceBetween={30}
          modules={[Pagination, Autoplay, Navigation]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          slidesPerView={1}
          className="testimonial-swiper"
        >
          {testimonials.map((user) => (
            <SwiperSlide key={user.id}>
              <>
                {/* Top Header */}
                <div
                  className="bg-purple-700 text-white px-6 pt-6 pb-30 relative"
                  key={user.id}
                >
                  <h3 className="text-center text-2xl font-light">
                    Our Clients <span className="font-bold">Feedback</span>
                  </h3>

                  {/* Profile Image */}
                  <div className="absolute top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-30 h-30 rounded-full border-4 border-white overflow-hidden shadow-md">
                      <img
                        src={user.image}
                        alt="User"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="pt-16 pb-6 px-6 text-center">
                  <h4 className="font-bold text-lg text-purple-600">
                    {user.name}
                  </h4>
                  <p className="text-sm text-gray-500 mb-3">{user.role}</p>

                  {/* Stars */}
                  <div className="flex justify-center items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote Box */}
                  <div className="border-2 flex mx-auto border-purple-900 p-10 rounded-lg text-sm text-gray-600 relative">
                    <p>{user.testimonial}</p>

                    {/* Notch corners (optional decorative) */}
                    <div className="absolute -top-[10px] left-[10px] w-5 h-5 bg-white border-purple-900" />
                    <div className="absolute -top-[10px] right-[10px] w-5 h-5 bg-white border-purple-900" />
                    <div className="absolute -bottom-[10px] left-[10px] w-5 h-5 bg-white border-purple-900" />
                    <div className="absolute -bottom-[10px] right-[10px] w-5 h-5 bg-white border-purple-900" />
                  </div>
                </div>
              </>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center items-center gap-4 py-15">
          <button className="swiper-button-prev-custom w-8 h-8 rounded-full flex items-center justify-center bg-purple-500 transition-all duration-200 cursor-pointer">
            <FaArrowLeft className="text-white" />
          </button>
          {[...Array(testimonials.length)].map((_, i) => (
            <PiStarFourFill
              key={i}
              className={
                i === activeIndex ? 'text-purple-500' : 'text-[#F3F3F3]'
              }
            />
          ))}
          <button className="swiper-button-next-custom w-8 h-8 rounded-full flex items-center justify-center bg-purple-500 transition-all duration-200 cursor-pointer">
            <FaArrowRight className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
