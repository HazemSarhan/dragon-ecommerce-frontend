import React from 'react';
import { Card } from './card';

const SingleProductCardImage = ({ image }) => {
  return (
    <>
      <div className="relative overflow-hidden rounded-xl p-[1px] bg-transparent">
        <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] z-0" />

        {/* Card content */}
        <div className="relative z-10 bg-white dark:bg-slate-950 text-black dark:text-white rounded-xl backdrop-blur-3xl p-5 h-full">
          <Card className={`p-6 border-0 shadow-none bg-transparent`}>
            <img
              src={image}
              className="w-full h-auto object-cover"
              alt="product-image"
            />
          </Card>
        </div>
      </div>
    </>
  );
};

export default SingleProductCardImage;
