import { whyChooseUs } from '@/data';
import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="heading mb-6">
        <h2 className="text-2xl shadow-sm font-bold w-fit px-3 border-l-4 border-purple-500 py-3 rounded-xl">
          Why To Choose Us 📍
        </h2>
      </div>

      <div className="choose-us">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {whyChooseUs.map((choose) => {
            return (
              <div
                className="card flex flex-col items-center justify-center gap-5 py-10 px-8 border border-purple-500 rounded-xl mt-6 overflow-hidden relative"
                key={choose.id}
              >
                <div className="absolute top-0 left-0 w-32 h-32 bg-purple-600/80 blur-2xl rounded-full opacity-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                <div className="p-3 bg-purple-500 hover:bg-purple-700 transition-colors duration-300 text-white rounded-full">
                  {choose.icon}
                </div>
                <h2 className="font-medium text-xl">{choose.title}</h2>
                <p className="text-center">{choose.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
