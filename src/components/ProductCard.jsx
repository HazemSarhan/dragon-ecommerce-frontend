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
      <Card>
        <Link to={`/product/${product.id}`}>
          <CardHeader>
            <img src={product.image} alt={product.name} className="w-75" />
            <CardTitle className="text-base mt-5">{product.name}</CardTitle>
            <CardDescription>${product.price}</CardDescription>
          </CardHeader>
        </Link>
        <CardContent>
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
