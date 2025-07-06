import React, { useEffect, useState } from 'react';
import { GiShoppingCart } from 'react-icons/gi';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Link } from 'react-router';
import MagicButton from './ui/MagicButton';
import MagicCard from './ui/MagicCard';
import axiosInstance from '@/lib/axiosInstance';

const CategoriesSection = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const { data } = await axiosInstance.get('/category');
      setCategories(data.categories);
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <section className="mx-auto container py-8 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => {
          return (
            <MagicCard
              key={index}
              title={category.title}
              description={category.description}
              href={category.href}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CategoriesSection;
