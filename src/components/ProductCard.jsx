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
import { Link } from 'react-router';

const ProductCard = ({ product }) => {
  return (
    <div className="grid">
      <Card>
        <Link to="/product/:id">
          <CardHeader>
            <img src={product.image} alt={product.title} className="w-75" />
            <CardTitle className="text-base mt-5">{product.title}</CardTitle>
            <CardDescription>${product.price}</CardDescription>
          </CardHeader>
        </Link>
        <CardContent>
          <Button className="w-full">
            Add to Cart
            <IoIosCart />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCard;
