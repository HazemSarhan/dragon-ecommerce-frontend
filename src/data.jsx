import product1 from '@/assets/product-1.png';
import product2 from '@/assets/product-2.png';
import product3 from '@/assets/product-3.png';
import product4 from '@/assets/product-4.png';
import product5 from '@/assets/product-5.png';
import product6 from '@/assets/product-6.png';
import product7 from '@/assets/product-7.png';
import product8 from '@/assets/product-8.png';
import product9 from '@/assets/product-9.png';
import product10 from '@/assets/product-10.png';
import product11 from '@/assets/product-11.png';
import product12 from '@/assets/product-12.png';
import product13 from '@/assets/product-13.png';
import product14 from '@/assets/product-14.png';
import { ShieldCheck, Truck, Headphones } from 'lucide-react';

export const categories = [
  {
    title: 'CPU',
    href: '/category/cpu',
    description: 'Explore high-performance processors from AMD and Intel.',
  },
  {
    title: 'GPU',
    href: '/category/gpu',
    description: 'Graphics cards for gaming, AI, and rendering.',
  },
  {
    title: 'Motherboards',
    href: '/category/motherboards',
    description: 'Find the perfect board for your build.',
  },
  {
    title: 'RAM',
    href: '/category/ram',
    description: 'Memory modules for speed and multitasking.',
  },
  {
    title: 'Storage',
    href: '/category/storage',
    description: 'Fast SSDs and high-capacity HDDs.',
  },
  {
    title: 'Power Supplies',
    href: '/category/psu',
    description: 'Reliable PSUs for stable power delivery.',
  },
];

export const bestSellingProducts = [
  {
    id: 1,
    title: 'NVIDIA GeForce RTX 4090',
    category: 'GPU',
    price: 2199.99,
    rating: 5,
    image: product1,
  },
  {
    id: 2,
    title: 'MSI RTX 4080 SUPRIM X',
    category: 'GPU',
    price: 1399.99,
    rating: 4.8,
    image: product2,
  },
  {
    id: 3,
    title: 'Intel Core i9-14900K',
    category: 'CPU',
    price: 629.99,
    rating: 4.9,
    image: product3,
  },
  {
    id: 4,
    title: 'AMD Ryzen 9 7950X3D',
    category: 'CPU',
    price: 699.99,
    rating: 4.7,
    image: product4,
  },
  {
    id: 5,
    title: 'ASUS ROG Maximus Z790 Hero',
    category: 'Motherboard',
    price: 599.99,
    rating: 4.9,
    image: product5,
  },
  {
    id: 6,
    title: 'MSI MEG X670E ACE',
    category: 'Motherboard',
    price: 549.99,
    rating: 4.8,
    image: product6,
  },
  {
    id: 7,
    title: 'G.SKILL Trident Z5 RGB 64GB DDR5-6000',
    category: 'RAM',
    price: 349.99,
    rating: 4.9,
    image: product7,
  },
  {
    id: 8,
    title: 'Corsair Dominator Platinum RGB 64GB',
    category: 'RAM',
    price: 329.99,
    rating: 4.8,
    image: product8,
  },
  {
    id: 9,
    title: 'Lian Li PC-O11 Dynamic EVO',
    category: 'Case',
    price: 189.99,
    rating: 4.7,
    image: product9,
  },
  {
    id: 10,
    title: 'NZXT H9 Elite Mid Tower',
    category: 'Case',
    price: 249.99,
    rating: 4.8,
    image: product10,
  },
];

export const whyChooseUs = [
  {
    id: 1,
    icon: (
      <ShieldCheck
        size={50}
        className="p-3 bg-white hover:bg-purple-500 hover:text-white transition-colors duration-300 text-black rounded-full"
      />
    ),
    title: '100% Secure Shopping',
    description: 'We use end-to-end encryption and trusted payment gateways.',
  },
  {
    id: 2,
    icon: (
      <Truck
        size={50}
        className="p-3 bg-white hover:bg-purple-500 hover:text-white transition-colors duration-300 text-black rounded-full"
      />
    ),
    title: 'Fast & Free Delivery',
    description:
      'Enjoy quick and free shipping on all orders above $200 across the country.',
  },
  {
    id: 3,
    icon: (
      <Headphones
        size={50}
        className="p-3 bg-white hover:bg-purple-500 hover:text-white transition-colors duration-300 text-black rounded-full"
      />
    ),
    title: '24/7 Customer Support',
    description:
      'Our expert support team is here for you day and night — whenever you need help.',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'John Smith',
    role: 'CEO, Agency',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    testimonial:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet vero aliquid alias nisi totam, ullam consequatur ex quis fugiat dolorum officia mollitia amet ab ratione recusandae distinctio eum laborum animi facere porro adipisci cupiditate, deleniti inventore? Totam velit at reprehenderit cupiditate doloribus, harum laboriosam alias, explicabo aperiam aliquam aut quae.',
  },
  {
    id: 2,
    name: 'Emily Davis',
    role: 'Marketing Director, TechWave',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    testimonial:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet vero aliquid alias nisi totam, ullam consequatur ex quis fugiat dolorum officia mollitia amet ab ratione recusandae distinctio eum laborum animi facere porro adipisci cupiditate, deleniti inventore? Totam velit at reprehenderit cupiditate doloribus, harum laboriosam alias, explicabo aperiam aliquam aut quae.',
  },
  {
    id: 3,
    name: 'Michael Lee',
    role: 'CTO, Nova Solutions',
    image: 'https://randomuser.me/api/portraits/men/47.jpg',
    testimonial:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet vero aliquid alias nisi totam, ullam consequatur ex quis fugiat dolorum officia mollitia amet ab ratione recusandae distinctio eum laborum animi facere porro adipisci cupiditate, deleniti inventore? Totam velit at reprehenderit cupiditate doloribus, harum laboriosam alias, explicabo aperiam aliquam aut quae.',
  },
];

export const singleProduct = [
  {
    id: 2,
    title: 'MSI RTX 4080 SUPRIM X',
    category: 'GPU',
    price: 1399.99,
    rating: 4.8,
    image: product2,
    reviews: [
      {
        id: 1,
        author: 'Hazem M.',
        rating: 5,
        comment:
          'Absolutely amazing performance! Handles 4K gaming like a beast.',
        date: '2025-06-20',
      },
      {
        id: 2,
        author: 'Sarah A.',
        rating: 4,
        comment: 'Very powerful GPU, but the fan is a bit noisy under load.',
        date: '2025-06-18',
      },
      {
        id: 3,
        author: 'Omar S.',
        rating: 5,
        comment:
          'Upgraded from a 3080 — the difference is massive. Worth every Riyal.',
        date: '2025-06-15',
      },
    ],
  },
];

export const cartItems = [
  {
    id: 1,
    title: 'NVIDIA GeForce RTX 4090',
    category: 'GPU',
    price: 2199.99,
    rating: 5,
    image: product1,
  },
  {
    id: 2,
    title: 'MSI RTX 4080 SUPRIM X',
    category: 'GPU',
    price: 1399.99,
    rating: 4.8,
    image: product2,
  },
  {
    id: 3,
    title: 'Intel Core i9-14900K',
    category: 'CPU',
    price: 629.99,
    rating: 4.9,
    image: product3,
  },
];

export const products = [
  {
    id: 1,
    title: 'Intel Core i9-14900K',
    category: 'cpu',
    price: 629.99,
    image: product3,
  },
  {
    id: 2,
    title: 'NVIDIA GeForce RTX 4090',
    category: 'gpu',
    price: 2199.99,
    image: product1,
  },
  {
    id: 6,
    title: 'NVIDIA GeForce RTX 4090',
    category: 'gpu',
    price: 2199.99,
    image: product1,
  },
  {
    id: 5,
    title: 'NVIDIA GeForce RTX 4090',
    category: 'gpu',
    price: 2199.99,
    image: product1,
  },
  {
    id: 3,
    title: 'Corsair Dominator Platinum RGB 64GB',
    category: 'ram',
    price: 329.99,
    image: product8,
  },
  {
    id: 11,
    title: 'ASUS ROG Thor 1000W Platinum II Power Supply',
    category: 'PSU',
    price: 439.39,
    rating: 4.8,
    image: product11,
  },
  {
    id: 12,
    title: 'Cooler Master MWE ATX 80 Plus Bronze Power Supply (750W)',
    category: 'PSU',
    price: 106.65,
    rating: 4.8,
    image: product12,
  },
  {
    id: 13,
    title: 'Samsung 9100 PRO 1TB PCIe 5.0 NVMe M.2 SSD',
    category: 'Storage',
    price: 189.2,
    rating: 4.8,
    image: product13,
  },
  {
    id: 14,
    title: 'NVME NV2 Kingston 1TB M.2 PCIe 4.0 3500MB',
    category: 'Storage',
    price: 93.32,
    rating: 4.8,
    image: product14,
  },
];

export const brands = [
  { id: 1, brand: 'Asus' },
  { id: 2, brand: 'MSI' },
  { id: 3, brand: 'Gigabyte' },
  { id: 4, brand: 'Corsair' },
  { id: 5, brand: 'Nvidia' },
];
