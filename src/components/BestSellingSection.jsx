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
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Button } from './ui/button';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { PiStarFourFill } from 'react-icons/pi';
import { IoIosCart } from 'react-icons/io';
import StarRating from './ui/StarRating';
import { Link, useNavigate } from 'react-router';
import axiosInstance from '@/lib/axiosInstance';
import { SkeletonCard } from './SkeletonCard';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';

const BestSellingSection = () => {
  const [bestSellingProducts, setBestSellingProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  let navigate = useNavigate();
  const { addToCart } = useCart();
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      setTimeout(() => {
        swiperRef.current.swiper.update();
      }, 100);
    }
  }, []);

  const fetchBestSellingProducts = async () => {
    try {
      const { data } = await axiosInstance.get('/product/bestSelling');
      setBestSellingProducts(data?.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBestSellingProducts();
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
        modules={[Pagination, Navigation]}
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
        {loading
          ? [...Array(3)].map((_, i) => (
              <SwiperSlide key={i}>
                <SkeletonCard />
              </SwiperSlide>
            ))
          : bestSellingProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <Card className="h-full flex flex-col justify-between min-h-[380px]">
                  <Link to={`/product/${product.id}`}>
                    <CardHeader>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-[180px] object-contain"
                      />
                      <CardTitle className="text-base line-clamp-2">
                        {product.name}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        ${product.price}
                        <div className="reviews my-2 flex gap-2 text-sm font-bold">
                          <span className="text-black dark:text-white">
                            ({product.numOfReviews ?? 0})
                          </span>
                          <StarRating
                            className="text-white"
                            rating={product.averageRating}
                          />
                        </div>
                      </CardDescription>
                    </CardHeader>
                  </Link>
                  <CardContent>
                    <Button
                      className="w-full cursor-pointer mt-auto"
                      onClick={() => {
                        if (!user) {
                          navigate('/login');
                          return;
                        }
                        addToCart(product.id);
                      }}
                    >
                      Add To Cart
                      <IoIosCart className="text-lg ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
      </Swiper>

      <div className="flex justify-center items-center gap-4 pt-10">
        <button className="best-selling-prev w-8 h-8 px-2 rounded-full flex items-center justify-center bg-purple-500 transition-all duration-200 cursor-pointer">
          <FaArrowLeft className="text-white" />
        </button>
        {[...Array(bestSellingProducts.length)].map((_, i) => (
          <PiStarFourFill
            key={i}
            className={i === activeIndex ? 'text-purple-500' : 'text-[#F3F3F3]'}
          />
        ))}
        <button className="best-selling-next w-8 h-8 px-2 rounded-full flex items-center justify-center bg-purple-500 transition-all duration-200 cursor-pointer">
          <FaArrowRight className="text-white" />
        </button>
      </div>
    </section>
  );
};

export default BestSellingSection;
