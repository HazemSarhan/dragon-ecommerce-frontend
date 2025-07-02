import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import MagicButton from '@/components/ui/MagicButton';
import { cartItems } from '@/data';
import React, { useState } from 'react';
import { FaTrashAlt, FaPlus, FaMinus } from 'react-icons/fa';

const CartPage = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => {
    if (quantity === 1) {
      console.log('item removed');
    } else {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <>
      <Navbar />
      <section className="container mx-auto px-6 py-12">
        <div className="cart">
          <div className="flex flex-col md:flex-row gap-5 justify-between items-start">
            <div className="w-full md:basis-[65%] md:max-w-[65%] border p-5">
              {cartItems.map((item) => {
                return (
                  <Card key={item.id} className="p-3 rounded-none mb-5">
                    <div className="flex items-center justify-around gap-5">
                      <div className="image">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-30"
                        />
                      </div>
                      <div className="info space-y-2 flex-1">
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <h2 className="font-medium">${item.price}</h2>
                        <p className="text-gray-600 dark:text-gray-300">
                          Eligible for FREE delivery
                        </p>
                      </div>
                      <div className="quanitiy flex items-center gap-2 border-2 border-purple-400 rounded-full px-3 py-1">
                        <button
                          onClick={decrement}
                          className={`p-1 rounded-full text-white bg-purple-500

                          }`}
                        >
                          {quantity === 1 ? (
                            <FaTrashAlt size={16} />
                          ) : (
                            <FaMinus size={16} />
                          )}
                        </button>
                        <span className="mx-2 text-lg font-medium">
                          {quantity}
                        </span>
                        <button
                          onClick={increment}
                          className="bg-purple-500 text-white rounded-full p-1"
                        >
                          <FaPlus size={16} />
                        </button>
                      </div>
                    </div>
                  </Card>
                );
              })}

              <Button className="bg-red-500 font-bold text-white text-lg px-3 py-3 my-3">
                Clear Cart
              </Button>
            </div>

            <div className="w-full md:flex-1 border p-5">
              <div className="total p-3">
                <h3 className="text-xl font-bold">Total Shopping Card</h3>

                {/* Subtotal */}
                <div className="flex justify-between items-center mt-5">
                  <h4>Subtotal:</h4>
                  <p className="text-gray-700 dark:text-gray-300">$4123</p>
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
                  <MagicButton title="Continue to checkout" />
                  <p className="text-xs text-gray-500 text-center mt-3">
                    🔒 Secure checkout – Your payment information is safe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
