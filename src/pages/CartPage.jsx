import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import MagicButton from '@/components/ui/MagicButton';
import { cartItems } from '@/data';
import React, { useEffect, useState } from 'react';
import { FaTrashAlt, FaPlus, FaMinus } from 'react-icons/fa';
import { Counter } from '@/components/animate-ui/components/counter';
import toast from 'react-hot-toast';
import axiosInstance from '@/lib/axiosInstance';
import { useCart } from '@/context/CartContext';
import { SkeletonItem, SkeletonSummary } from '@/components/CartItemsSkeleton';
import { redirect, useNavigate } from 'react-router';
import FooterUI from '@/components/FooterUI';

const CartPage = () => {
  const {
    cart: cartItems,
    total,
    loading,
    updateCartItems,
    deleteCartItem,
    fetchCart,
    clearCart,
  } = useCart();

  const navigate = useNavigate();

  const handleQuantityUpdate = async (productId, newVal, currentVal) => {
    if (newVal < 1) {
      await deleteCartItem(productId);
      toast.success('Item removed from cart');
    } else {
      const action = newVal > currentVal ? 'increase' : 'decrease';
      await updateCartItems(productId, action);
    }
  };

  const checkOut = async () => {
    try {
      const { data } = await axiosInstance.post('/order');
      window.location.href = data.url;
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <>
      <Navbar />
      <section className="container mx-auto px-6 py-12">
        <div className="cart">
          <div className="flex flex-col md:flex-row gap-5 justify-between items-start">
            <div className="w-full md:basis-[65%] md:max-w-[65%] border p-5">
              {loading
                ? [...Array(3)].map((_, i) => <SkeletonItem key={i} />)
                : cartItems.map((item) => (
                    <Card
                      key={item?.product?.id}
                      className="p-3 rounded-none mb-5"
                    >
                      <div className="flex flex-col md:flex-row items-center justify-around gap-5">
                        <div className="image">
                          <img
                            src={item?.product?.image}
                            alt={item?.product?.name}
                            className="w-30"
                          />
                        </div>
                        <div className="info space-y-2 flex-1">
                          <h3 className="text-xl font-bold">
                            {item?.product?.name}
                          </h3>
                          <h2 className="font-medium">
                            ${item?.product?.price}
                          </h2>
                          <p className="text-gray-600 dark:text-gray-300">
                            Eligible for FREE delivery
                          </p>
                        </div>

                        <div className="quanitiy flex items-center gap-2 px-3 py-1">
                          <Counter
                            number={item.quantity}
                            setNumber={(newVal) =>
                              handleQuantityUpdate(
                                item.product.id,
                                newVal,
                                item.quantity
                              )
                            }
                          />
                        </div>
                      </div>
                    </Card>
                  ))}
              {cartItems.length > 0 ? (
                <Button
                  onClick={clearCart}
                  className="px-6 font-bold text-base"
                >
                  Clear Cart
                </Button>
              ) : (
                <p className="text-xl text-center text-muted-foreground my-5">
                  🛍️ Oops! Looks like your cart is empty. Time to fill it with
                  some tech magic!
                </p>
              )}
            </div>

            <div className="w-full md:flex-1 border p-5">
              {loading ? (
                <SkeletonSummary />
              ) : (
                <div className="total p-3">
                  <h3 className="text-xl font-bold">Total Shopping Card</h3>

                  {/* Subtotal */}
                  <div className="flex justify-between items-center mt-5">
                    <h4>Subtotal:</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      ${total.toFixed(2)}
                    </p>
                  </div>
                  <hr className="my-4 border-border" />

                  {/* Shipping */}
                  <div className="flex justify-between items-center mt-5">
                    <h4>Shipping:</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Free Shipping
                    </p>
                  </div>
                  <hr className="my-4 border-border" />

                  {/* Estimated Tax */}
                  <div className="flex justify-between items-center">
                    <h4>Estimated Tax:</h4>
                    <p className="text-gray-700 dark:text-gray-300">$0.00</p>
                  </div>
                  <hr className="my-4 border-border" />

                  {/* Promo Code */}
                  <div className="flex items-center gap-2 my-2">
                    <input
                      type="text"
                      placeholder="Promo code"
                      className="flex-1 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <Button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition">
                      Apply
                    </Button>
                  </div>
                  <hr className="my-4 border-border" />

                  <div className="checkout">
                    <MagicButton
                      title="Continue to checkout"
                      handleClick={checkOut}
                    />
                    <p className="text-xs text-gray-500 text-center mt-3">
                      🔒 Secure checkout – Your payment information is safe.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <FooterUI />
      </section>
    </>
  );
};

export default CartPage;
