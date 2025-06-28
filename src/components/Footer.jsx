import React from 'react';
import logoImage from '@/assets/dragon-logo2.png';
import {
  FaFacebook,
  FaFacebookF,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import { Link } from 'react-router';
import googleImage from '@/assets/google-play.webp';
import appStoreImage from '@/assets/app-store.png';
import visaImage from '@/assets/visa2.png';

const Footer = () => {
  return (
    <section className="container mx-auto px-0 md:px-9 pt-12">
      <footer className="bg-black shadow-2xl border px-8 rounded-t-md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Logo */}
          <div className="logo my-auto text-center md:text-start px-6 py-8 flex flex-col gap-8">
            <img src={logoImage} alt="logo" className="w-40 mx-auto md:mx-0" />

            <div className="description">
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                magnam illo suscipit minima ex sit sunt obcaecati repudiandae
                alias impedit.
              </p>
            </div>

            <div className="icons space-x-3">
              <button className="cursor-pointer rounded-full bg-[#F3F3F3] p-2">
                <FaLinkedinIn className="text-[#191A23]" />
              </button>
              <button className="cursor-pointer rounded-full bg-[#F3F3F3] p-2">
                <FaFacebookF className="text-[#191A23]" />
              </button>
              <button className="cursor-pointer rounded-full bg-[#F3F3F3] p-2">
                <FaTwitter className="text-[#191A23]" />
              </button>
            </div>
          </div>

          {/* Nav Links */}
          <div className="nav-links flex flex-row px-6 py-10 gap-8 items-center justify-center md:justify-start text-center">
            <ul className="text-white space-y-2">
              <h2 className="text-purple-400 text-xl font-bold">Links</h2>
              <li>
                <Link to="">Categories</Link>
              </li>
              <li>
                <Link to="">Best Selling Products</Link>
              </li>
              <li>
                <Link to="">Why Choose Us</Link>
              </li>
              <li>
                <Link to="">Testimonials</Link>
              </li>
            </ul>

            <ul className="text-white space-y-2">
              <h2 className="text-purple-400 text-xl font-bold">Categories</h2>
              <li>
                <Link to="">CPU</Link>
              </li>
              <li>
                <Link to="">GPU</Link>
              </li>
              <li>
                <Link to="">Motherboards</Link>
              </li>
              <li>
                <Link to="">RAM</Link>
              </li>
            </ul>
          </div>

          {/* Get Us */}
          <div className="get-us px-6 py-20">
            <h2 className="text-white text-center font-bold text-xl mb-5">
              Download Our App
            </h2>
            <div className="images flex flex-col items-center gap-2">
              <img src={googleImage} alt="google" className="w-50" />
              <img src={appStoreImage} alt="apple" className="w-50" />
            </div>

            <h2 className="text-white text-center font-bold text-xl mt-5">
              We accept all payments
            </h2>
            <img src={visaImage} alt="visa" />
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
