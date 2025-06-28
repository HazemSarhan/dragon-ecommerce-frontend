import React from 'react';
import image1 from '@/assets/image1.webp';
import image2 from '@/assets/image2.webp';
import MagicButton from './ui/MagicButton';

const ImagesSection = () => {
  return (
    <section className="mx-auto container px-6 py-12">
      <div className="images-section grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
        <div className="left-image relative w-full bg-[#EA1D1F] lg:bg-transparent py-12 lg:py-0 rounded-xl">
          <img src={image1} alt="image1" className="rounded-xl object-cover" />
          <div className="text text-center m-auto relative lg:absolute top-5 lg:top-19 left-0 lg:left-5 w-50 md:w-60">
            <h2 className="text-xl font-medium mb-2 text-white">
              Prebuilt Gaming PCs
            </h2>
            <p className="text-sm md:text-base my-3 text-white">
              We offers ready-to-ship gaming PCs with warranty and support. Get
              yours, start gaming, and enjoy instantly!
            </p>
            <MagicButton title="Browse All RDY Systems" />
          </div>
        </div>
        <div className="right-image relative w-full bg-[#F3FBE8] rounded-xl py-12 lg:py-0">
          <img src={image2} alt="image1" className="rounded-xl object-cover" />
          <div className="text text-center m-auto relative lg:absolute top-5 lg:top-14 left-0 lg:left-5 w-50 md:w-60">
            <h2 className="text-xl text-black font-bold mb-2">
              Custom Gaming PCs
            </h2>
            <p className="text-sm md:text-base my-3 text-slate-800 lg:white">
              customize your PC with top brands like Intel, AMD, and ASUS, with
              no compatibility worries. What’s best is that we'll build it for
              you!
            </p>
            <MagicButton title="Start Building Your Own" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImagesSection;
