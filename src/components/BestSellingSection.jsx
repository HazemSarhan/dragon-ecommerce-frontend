import { bestSellingProducts } from '@/data';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import MagicButton from './ui/MagicButton';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Button } from './ui/button';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { PiStarFourFill } from 'react-icons/pi';
import { IoIosCart } from 'react-icons/io';

const BestSellingSection = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      setTimeout(() => {
        swiperRef.current.swiper.update();
      }, 100);
    }
  }, []);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <section className="mx-auto container px-6 py-12">
      <div className="heading mb-6">
        <h2 className="text-2xl shadow-sm font-bold w-fit px-3 border-l-4 border-purple-500 py-3 rounded-xl">
          Best Selling Products 🔥
        </h2>
      </div>

      <Swiper
        // slidesPerView={'4'}
        ref={swiperRef}
        onSlideChange={handleSlideChange}
        spaceBetween={30}
        modules={[Pagination, Autoplay, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.best-selling-next',
          prevEl: '.best-selling-prev',
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="testimonial-swiper"
      >
        {bestSellingProducts.map((product) => (
          <SwiperSlide key={product.id} className="w-[280px]">
            <Card className="h-full">
              <CardHeader>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-50 object-contain"
                />
                <CardTitle className="text-base">{product.title}</CardTitle>
                <CardDescription className="text-sm">
                  ${product.price}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">
                  Add To Cart
                  <span>
                    <IoIosCart className="text-lg" />
                  </span>
                </Button>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center items-center gap-4 pt-10">
        <button className="best-selling-prev w-8 h-8 rounded-full flex items-center justify-center bg-purple-500 transition-all duration-200 cursor-pointer">
          <FaArrowLeft className="text-white" />
        </button>
        {[...Array(bestSellingProducts.length)].map((_, i) => (
          <PiStarFourFill
            key={i}
            className={i === activeIndex ? 'text-purple-500' : 'text-[#F3F3F3]'}
          />
        ))}
        <button className="best-selling-next w-8 h-8 rounded-full flex items-center justify-center bg-purple-500 transition-all duration-200 cursor-pointer">
          <FaArrowRight className="text-white" />
        </button>
      </div>
    </section>
  );
};

export default BestSellingSection;
