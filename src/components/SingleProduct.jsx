import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, CardHeader } from '@/components/ui/card';
import StarRating from '@/components/ui/StarRating';
import payments from '@/assets/payment-methods.avif';
import SingleProductCardImage from '@/components/ui/SingleProductCardImage';
import MagicButton from '@/components/ui/MagicButton';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FaStar } from 'react-icons/fa';
import axiosInstance from '@/lib/axiosInstance';
import { Spinner } from './ui/Spinner';

const SingleProduct = () => {
  const { id } = useParams();

  const [singleProduct, setSingleProduct] = useState(null);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState('');
  const [notFound, setNotFound] = useState(false);

  const fetchSignleProduct = async () => {
    try {
      const { data } = await axiosInstance.get(`/product/${id}`);
      if (!data.product) {
        setNotFound(true);
        return;
      }
      setSingleProduct(data.product);
      setNotFound(false);
    } catch (error) {
      if (error.response?.status === 404) {
        setNotFound(true);
      } else {
        console.log(error.response?.data?.message || 'Something went wrong');
      }
    }
  };

  useEffect(() => {
    fetchSignleProduct();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted rating:', rating);
    console.log('Submitted comment:', comment);
  };

  return (
    <>
      {notFound ? (
        <div className="container mx-auto text-center py-12">
          <h1 className="text-3xl font-bold text-red-500 mb-4">
            404 - Product Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Sorry, the product you are looking for does not exist.
          </p>
          <Link to="/" className="text-blue-500 underline mt-4 inline-block">
            Back to Home
          </Link>
        </div>
      ) : singleProduct ? (
        <section className="mx-auto container px-6 py-12">
          <>
            {/* Location */}
            <div className="location text-sm text-gray-400">
              <Link to="#">Categories</Link> / <Link to="#">GPU</Link> /{' '}
              <span className="text-black dark:text-white" to="#">
                {singleProduct.name}
              </span>
            </div>

            {/* Single Product Details */}
            <div className="single-product flex flex-col md:flex-row justify-between">
              <div className="left my-8">
                <div className="image">
                  <SingleProductCardImage image={singleProduct.image} />
                </div>
              </div>

              {/* Name And Price */}
              <div className="right my-auto">
                <div className="text space-y-3">
                  <h1 className="font-bold text-4xl">{singleProduct.name}</h1>
                  <div className="price flex justify-between items-center">
                    <h3 className="text-xl">${singleProduct.price}</h3>
                    <h3 className="text-green-600 dark:text-green-400">
                      In Stock
                    </h3>
                  </div>
                </div>

                {/* Ratings */}
                <div className="rating flex gap-2 my-3">
                  <span className="font-bold">{singleProduct.rating || 0}</span>
                  <StarRating rating={singleProduct.rating} />
                </div>
                <hr className="my-3 border-border" />

                {/* Features */}
                <div className="features my-5">
                  <p className="text-lg">FREE Returns</p>
                  <p className="text-lg">All prices include VAT.</p>
                  <hr className="my-3 border-border" />

                  {/* Payment Methods */}
                  <div className="payments mt-5">
                    <p className="text-lg font-medium">
                      We accept all payment methods!
                    </p>
                    <img
                      src={payments}
                      alt="payment-methods"
                      className="w-full mt-3"
                    />
                  </div>
                </div>
                <hr className="my-3 border-border" />

                <div className="cart">
                  <Select>
                    <SelectTrigger
                      className={`w-full border shadow-md p-5 rounded-lg mb-5`}
                    >
                      <SelectValue placeholder="Quantity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                    </SelectContent>
                  </Select>

                  <MagicButton title="Add to cart" />
                  <Button className={`w-full my-5 text-md px-6 py-5 font-bold`}>
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>

            <hr className="my-5" />

            {/* Reviews Section */}
          </>
        </section>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default SingleProduct;
