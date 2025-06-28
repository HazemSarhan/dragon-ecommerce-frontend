import React from 'react';
import company1 from '@/assets/company-1.png';
import company2 from '@/assets/company-2.png';
import company3 from '@/assets/company-3.png';
import company4 from '@/assets/company-4.png';
import company5 from '@/assets/company-5.png';
import company6 from '@/assets/company-6.png';
import company7 from '@/assets/company-7.png';
import company8 from '@/assets/company-8.png';
import company9 from '@/assets/company-9.png';
import company10 from '@/assets/company-10.png';

const CompanyLogos = () => {
  const logos = [
    company1,
    company2,
    company3,
    company4,
    company5,
    company6,
    company7,
    company8,
    company9,
    company10,
  ];
  return (
    <section className="w-full overflow-hidden container mx-auto pb-8 flex sm:flex-row flex-col sm:items-center items-start">
      <h2 className="w-[300px] shrink-0 px-5 border-l-4 border-purple-500 bg-white dark:bg-black py-2 z-10 sm:text-base text-xl font-semibold text-left">
        Our Partners <br />
        and Companies We Trust
      </h2>

      <div className="flex animate-marquee whitespace-nowrap py-10 md:py-0">
        {logos.map((logo, index) => {
          return (
            <img
              key={index}
              src={logo}
              alt="company logo"
              className="mx-12 h-25 w-25 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
            />
          );
        })}
      </div>
    </section>
  );
};

export default CompanyLogos;
