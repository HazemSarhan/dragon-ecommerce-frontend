import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { products, brands } from '@/data';
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaFilter } from 'react-icons/fa';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { IoFilter } from 'react-icons/io5';
import { Input } from '@/components/ui/input';
import MagicButton from '@/components/ui/MagicButton';
import axiosInstance from '@/lib/axiosInstance';
import ProductCardSkeleton from '@/components/ProductCardSkeleton';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const { data } = await axiosInstance.get('/product');
      setProducts(data.products);
      console.log(data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.category.title.toLowerCase() === categoryName.toLowerCase()
  );

  const [selectedBrand, setSelectedBrand] = useState([]);
  const [range, setRange] = useState(1);

  const handleToggle = (brand) => {
    setSelectedBrand((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  return (
    <>
      <Navbar />
      <section className="container mx-auto px-6 py-12">
        <div className="mb-4 text-sm">
          Categories /{' '}
          <span className="text-gray-500 dark:text-gray-400">
            {categoryName.toUpperCase()}
          </span>
        </div>
        <div className="category-page">
          <div className="flex flex-col md:flex-row justify-between items-start gap-5">
            <div className="left w-full md:basis-[30%] md:max-w-[30%] border p-5">
              <div className="filters">
                {/* Filter Main */}
                <div className="filter flex items-center gap-3">
                  <h2 className="font-medium">Filters</h2>
                  <IoFilter />
                </div>
                <hr className="my-3" />

                {/* Filter Badge */}
                <div className="filter flex flex-col gap-3">
                  <h2 className="font-medium">Filtered By:</h2>
                  <Badge variant="default">{categoryName.toUpperCase()}</Badge>
                </div>
                <hr className="my-3" />

                {/* Filter Price */}
                <div className="filter flex flex-col gap-3">
                  <h2 className="font-medium">Price Filter:</h2>

                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Min: $1</span>
                    <span>Selected: ${range}</span>
                    <span>Max: $50000</span>
                  </div>

                  <input
                    type="range"
                    min={1}
                    max={50000}
                    value={range}
                    onChange={(e) => setRange(Number(e.target.value))}
                    className="w-full accent-purple-500 cursor-pointer"
                  />
                </div>
                <hr className="my-3" />

                <div className="filter flex flex-col gap-3">
                  <h2 className="font-medium">Filter By Name:</h2>
                  <Input placeholder="Product Name" />
                </div>
                <hr className="my-3" />

                <MagicButton title="Apply Filters" />
              </div>
            </div>
            <div className="right w-full md:flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5 border p-5">
              {loading ? (
                Array.from({ length: 6 }).map((_, i) => (
                  <ProductCardSkeleton key={i} />
                ))
              ) : filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <p className="text-nowrap">
                  Sorry, No products found in this category. Make sure you
                  comeback later!
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CategoryPage;
