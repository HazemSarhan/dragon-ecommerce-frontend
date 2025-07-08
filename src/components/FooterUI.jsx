import React from 'react';
import logo2 from '@/assets/dragon-logo.png';
import { Link } from 'react-router';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import googleImage from '@/assets/google-play.webp';
import appStoreImage from '@/assets/app-store.png';
import visaImage from '@/assets/visa2.png';

const FooterUI = ({
  logo = {
    src: logo2,
    alt: 'Dragon-Logo',
    url: '/',
  },
  tagline = 'A Store You Trust!',
  menuItems = [
    {
      title: 'Sections',
      links: [
        { text: 'Partners', url: '#' },
        { text: 'Categories', url: '#' },
        { text: 'Offers', url: '#' },
        { text: 'Best Products', url: '#' },
        { text: 'Why Us', url: '#' },
        { text: 'Testimonials', url: '#' },
      ],
    },
    {
      title: 'Categories',
      links: [
        { text: 'GPU', url: '/category/gpu' },
        { text: 'Motherboards', url: '/category/motherboards' },
        { text: 'CPU', url: '/category/cpu' },
        { text: 'Storage', url: '/category/storage' },
        { text: 'Power Supplies', url: '/category/psu' },
        { text: 'RAM', url: '/category/ram' },
      ],
    },
  ],
  copyright = '© 2025 Hazem Megahed. All rights reserved.',
  bottomLinks = [
    { text: 'Terms and Conditions', url: '#' },
    { text: 'Privacy Policy', url: '#' },
  ],
}) => {
  return (
    <section className="py-32 px-6 container mx-auto">
      <div className="container">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6 text-center md:text-start">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Link to="/">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    title={logo.title}
                    className="h-15"
                  />
                </Link>
                <p className="text-xl font-semibold">{logo.title}</p>
              </div>
              <p className="mt-4 font-bold">{tagline}</p>

              <div className="get-in-touch mt-5">
                <h1 className="text-base font-medium">Get in touch</h1>
                <div className="icons flex items-center justify-center md:justify-start gap-3 mt-4">
                  <div className="bg-slate-100 dark:bg-white text-black p-2 rounded-full">
                    <FaFacebook size={25} />
                  </div>
                  <div className="bg-slate-100 dark:bg-white text-black p-2 rounded-full">
                    <FaTwitter size={25} />
                  </div>
                  <div className="bg-slate-100 dark:bg-white text-black p-2 rounded-full">
                    <FaLinkedin size={25} />
                  </div>
                  <div className="bg-slate-100 dark:bg-white text-black p-2 rounded-full">
                    <FaInstagram size={25} />
                  </div>
                </div>
              </div>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-4 text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="col-span-2 mx-auto mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <h1 className="text-2xl font-bold">Download Our App</h1>
              </div>
              <div className="images mt-4">
                <img src={googleImage} alt="google" width={200} />
                <img src={appStoreImage} alt="google" width={200} />
              </div>

              <div className="payments font-medium">
                <p>We accept all payments</p>
                <img src={visaImage} alt="visa" width={200} />
              </div>
            </div>
          </div>

          <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="underline hover:text-primary">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default FooterUI;
