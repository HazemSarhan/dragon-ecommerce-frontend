import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { IoIosCart } from 'react-icons/io';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import StarRating from './ui/StarRating';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  let navigate = useNavigate();
  const { user } = useAuth();

  const handleAddToCart = () => {
    if (!user) {
      navigate('/login');
      return;
    }

    addToCart(product.id);
  };

  return (
    <div className="grid">
      <Card className="flex flex-col h-full justify-between">
        <Link to={`/product/${product.id}`} className="flex-grow">
          <CardHeader>
            <img
              src={product.image}
              alt={product.name}
              className="w-full object-contain max-h-48"
            />
            <CardTitle className="text-base mt-5">{product.name}</CardTitle>
            <CardDescription>
              ${product.price}
              <div className="reviews my-2 flex gap-2 text-sm text-white font-bold">
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

        <CardContent className="mt-auto">
          <Button className="w-full cursor-pointer" onClick={handleAddToCart}>
            Add to Cart
            <IoIosCart />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCard;
