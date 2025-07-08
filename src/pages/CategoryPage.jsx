import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaFilter, FaStar } from 'react-icons/fa';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { IoFilter } from 'react-icons/io5';
import { Input } from '@/components/ui/input';
import MagicButton from '@/components/ui/MagicButton';
import axiosInstance from '@/lib/axiosInstance';
import ProductCardSkeleton from '@/components/ProductCardSkeleton';
import { Slider } from '@/components/ui/slider';
import toast from 'react-hot-toast';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(50000);
  const [allCategories, setAllCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([
    categoryName.toLowerCase(),
  ]);
  const [searchName, setSearchName] = useState('');

  const fetchCategories = async () => {
    try {
      const { data } = await axiosInstance.get('/category');
      setAllCategories(data.categories.map((cat) => cat.title));
    } catch (error) {
      toast.error('Failed to load categories');
    }
  };

  const fetchProducts = async () => {
    try {
      const { data } = await axiosInstance.get('/product');
      const allProducts = data.products;

      const filtered = allProducts.filter(
        (product) =>
          product.category.title.toLowerCase() === categoryName.toLowerCase()
      );

      setProducts(filtered);

      if (filtered.length > 0) {
        const prices = filtered.map((p) => p.price);
        const minPrice = Math.floor(Math.min(...prices));
        const maxPrice = Math.ceil(Math.max(...prices));
        setMin(minPrice);
        setMax(maxPrice);
        setRange(maxPrice);
      }
    } catch (error) {
      toast.error(error.response?.data);
    } finally {
      setLoading(false);
    }
  };

  const handleFilter = async () => {
    try {
      setLoading(true);

      const params = new URLSearchParams({
        categories: selectedCategories.join(','),
        min: min.toString(),
        max: range.toString(),
        name: searchName,
      });

      const { data } = await axiosInstance.get(
        `/product/filter?${params.toString()}`
      );
      setProducts(data.products);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Filter failed');
    } finally {
      setLoading(false);
    }
  };

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat.toLowerCase())
        ? prev.filter((c) => c !== cat.toLowerCase())
        : [...prev, cat.toLowerCase()]
    );
  };

  useEffect(() => {
    fetchProducts();
  }, [categoryName]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.category.title.toLowerCase() === categoryName.toLowerCase()
  );

  const [selectedBrand, setSelectedBrand] = useState([]);
  const [range, setRange] = useState(1);

  return (
    <>
      <Navbar />
      <section className="container mx-auto px-6 py-12">
        <div className="mb-4 text-sm">
          Categories /
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
                  <h2 className="font-medium text-base">Categories:</h2>
                  <div className="flex flex-wrap gap-2">
                    {allCategories.map((cat) => (
                      <Badge
                        key={cat}
                        variant={
                          selectedCategories.includes(cat.toLowerCase())
                            ? 'default'
                            : 'outline'
                        }
                        className="cursor-pointer"
                        onClick={() => toggleCategory(cat)}
                      >
                        {cat.toUpperCase()}
                      </Badge>
                    ))}
                  </div>
                </div>
                <hr className="my-3" />

                {/* Filter Price */}
                <div className="filter flex flex-col gap-3">
                  <h2 className="font-medium text-base">Price Filter:</h2>

                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Min: ${min}</span>
                    <span>Selected: ${range}</span>
                    <span>Max: ${max}</span>
                  </div>

                  <Slider
                    value={[range]}
                    min={min}
                    max={max}
                    onValueChange={(val) => setRange(val[0])}
                    step={1}
                  />
                </div>
                <hr className="my-3" />

                <div className="filter flex flex-col gap-3">
                  <h2 className="font-medium text-base">Filter By Name:</h2>
                  <Input
                    placeholder="Product Name"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                  />
                </div>
                <hr className="my-3" />

                <MagicButton title="Apply Filters" handleClick={handleFilter} />
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
