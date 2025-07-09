import Navbar from '@/components/Navbar';
import React from 'react';

import Footer from '@/components/Footer';
import SingleProduct from '@/components/SingleProduct';
import FooterUI from '@/components/FooterUI';

const SingleProductPage = () => {
  return (
    <>
      <Navbar />
      <SingleProduct />
      <FooterUI />
    </>
  );
};

export default SingleProductPage;
