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
import toast from 'react-hot-toast';
import { ButtonLoading } from './ui/ButtonLoading';

const SingleProduct = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axiosInstance.post('/review', {
        rating,
        comment,
        productId: id,
      });
      toast.success(response.data.message);
      setRating(0);
      setComment('');
      fetchSignleProduct();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to submit review');
    } finally {
      setLoading(false);
    }
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
                <div className="rating flex gap-2 my-3 items-center">
                  <span className="font-bold">
                    ({singleProduct.numOfReviews || 0})
                  </span>
                  <StarRating rating={singleProduct.averageRating} />
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
            <form onSubmit={handleSubmit} className="mt-6 space-y-4 max-w-xl">
              <h2 className="text-2xl font-bold">Write a Review</h2>

              {/* Rating Stars */}
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                  >
                    <FaStar
                      size={24}
                      className={`cursor-pointer ${
                        star <= (hover || rating)
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* Comment textarea */}
              <textarea
                className="w-full p-3 border rounded-md text-sm"
                placeholder="Write your review..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={5}
                required
              />

              {loading ? (
                <ButtonLoading />
              ) : (
                <Button type="submit" className="w-full">
                  Submit Review
                </Button>
              )}
            </form>

            <div className="mt-8">
              {singleProduct.reviews?.length > 0 ? (
                <div className="mt-10 space-y-6">
                  <h2 className="text-2xl font-bold">Customer Reviews</h2>

                  {singleProduct.reviews.map((review) => (
                    <div
                      key={review.id}
                      className="border border-border p-4 rounded-md"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-base font-medium">
                          {review.user.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {new Date(review.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, index) => (
                          <FaStar
                            key={index}
                            size={16}
                            className={
                              index < review.rating
                                ? 'text-yellow-400'
                                : 'text-gray-300'
                            }
                          />
                        ))}
                      </div>
                      <p className="text-base text-gray-700 dark:text-gray-300">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-700 dark:text-gray-400">
                  No reviews yet..
                </p>
              )}
            </div>
          </>
        </section>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default SingleProduct;
