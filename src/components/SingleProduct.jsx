import React, { useState } from 'react';
import { Link } from 'react-router';
import { Card, CardHeader } from '@/components/ui/card';
import { singleProduct } from '@/data';
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

const SingleProduct = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted rating:', rating);
    console.log('Submitted comment:', comment);
  };

  return (
    <>
      {singleProduct.map((product) => {
        return (
          <section key={product.id} className="mx-auto container px-6 py-12">
            <>
              {/* Location */}
              <div className="location text-sm text-gray-400">
                <Link to="#">Categories</Link> / <Link to="#">GPU</Link> /{' '}
                <span className="text-black dark:text-white" to="#">
                  {product.title}
                </span>
              </div>

              {/* Single Product Details */}
              <div className="single-product flex flex-col md:flex-row justify-between">
                <div className="left my-8">
                  <div className="image">
                    <SingleProductCardImage image={product.image} />
                  </div>
                </div>

                {/* Title And Price */}
                <div className="right my-auto">
                  <div className="text space-y-3">
                    <h1 className="font-bold text-4xl">{product.title}</h1>
                    <div className="price flex justify-between items-center">
                      <h3 className="text-xl">${product.price}</h3>
                      <h3 className="text-green-600 dark:text-green-400">
                        In Stock
                      </h3>
                    </div>
                  </div>

                  {/* Ratings */}
                  <div className="rating flex gap-2 my-3">
                    <span className="font-bold">{product.rating}</span>
                    <StarRating rating={product.rating} />
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
                    <Button
                      className={`w-full my-5 text-md px-6 py-5 font-bold`}
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>

              <hr className="my-5" />

              {/* Reviews Section */}
              <div className="reviews">
                <h1 className="text-2xl font-bold mb-4">
                  Reviews: {product.reviews.length}
                </h1>
                {product.reviews && product.reviews.length > 0 ? (
                  product.reviews.map((review) => (
                    <Card className="p-5 mb-5" key={review.id}>
                      <div className="reviews" key={review.id}>
                        <div className="flex flex-col">
                          <h4 className="font-bold text-xl">{review.author}</h4>
                          <div className="ratings flex items-center gap-2">
                            <span>{review.rating}</span>
                            <StarRating rating={review.rating} />
                          </div>
                          <div className="comment">
                            <p className="mt-3 text-gray-600 dark:text-gray-300">
                              {review.comment}
                            </p>
                            <span className="text-sm text-gray-400">
                              {new Date(review.date).toDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))
                ) : (
                  <p className="text-gray-500">No reviews yet.</p>
                )}

                {/* Review Comment */}
                <form onSubmit={handleSubmit} className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">
                    Leave your ratings!
                  </h3>

                  {/* Star Rating Input */}
                  <div className="flex items-center gap-2 mb-8">
                    {[...Array(5)].map((_, index) => {
                      const current = index + 1;
                      return (
                        <button
                          type="button"
                          key={index}
                          onClick={() => setRating(current)}
                          onMouseEnter={() => setHover(current)}
                          onMouseLeave={() => setHover(rating)}
                          className="focus:outline-none"
                        >
                          <FaStar
                            size={24}
                            className={
                              current <= (hover || rating)
                                ? 'text-yellow-400'
                                : 'text-gray-300'
                            }
                          />
                        </button>
                      );
                    })}
                    <span className="text-sm text-gray-600">
                      {rating ? `${rating} out of 5` : ''}
                    </span>
                  </div>

                  {/* Textarea */}
                  <textarea
                    placeholder="Leave your review..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                    required
                  />

                  {/* Submit Button */}

                  <Button className="mt-4 px-8 py-4 rounded-lg font-medium">
                    Write Review
                  </Button>
                </form>
              </div>
            </>
          </section>
        );
      })}
    </>
  );
};

export default SingleProduct;
