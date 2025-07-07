import React, { createContext, useContext, useEffect, useReducer } from 'react';
import axiosInstance from '@/lib/axiosInstance';
import toast from 'react-hot-toast';

const CartContext = createContext();

const initialState = {
  cart: [],
  total: 0,
  loading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        cart: action.payload.cartItems,
        total: action.payload.total,
        loading: false,
      };
    case 'CLEAR_CART':
      return { ...state, cart: [], total: 0 };
    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchCart = async () => {
    try {
      dispatch({ type: 'FETCH_START' });
      const res = await axiosInstance.get('/cart');
      dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = async (productId) => {
    try {
      await axiosInstance.post('/cart', { productId });
      fetchCart();
      toast.success('Added to cart');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Add to cart failed');
    }
  };

  const updateCartItems = async (productId, action) => {
    try {
      await axiosInstance.patch('/cart', { productId, action });
      fetchCart();
    } catch (error) {
      toast.error('Failed to update cart');
    }
  };

  const deleteCartItem = async (productId) => {
    try {
      await axiosInstance.delete('/cart/deleteItem', {
        data: { productId },
      });
      fetchCart();
    } catch (error) {
      toast.error('Failed to delete item');
    }
  };

  const clearCart = async () => {
    try {
      await axiosInstance.delete('/cart');
      dispatch({ type: 'CLEAR_CART' });
      toast.success('Cart cleared');
      await fetchCart();
    } catch (error) {
      toast.error('Failed to clear cart');
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        total: state.total,
        loading: state.loading,
        fetchCart,
        addToCart,
        updateCartItems,
        deleteCartItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
