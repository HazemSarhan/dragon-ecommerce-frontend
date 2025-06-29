import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { GiShoppingCart } from 'react-icons/gi';

const ChooseUsCard = ({ title, description, icon }) => {
  return (
    <div className="relative overflow-hidden rounded-xl p-[1px] bg-transparent">
      <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] z-0" />

      {/* Card content */}
      <div className="relative z-10 bg-white dark:bg-slate-950 text-black dark:text-white rounded-xl backdrop-blur-3xl p-5 h-full">
        <Card className="bg-transparent shadow-none border-0">
          <CardHeader>
            <div className="absolute top-0 left-0 w-20 h-20 bg-purple-600/80 blur-2xl rounded-full opacity-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="text-center flex justify-center my-3">{icon}</div>
            <div className="flex flex-col items-center justify-center gap-3">
              <CardTitle>{title}</CardTitle>
              <CardDescription className="text-center">
                {description}
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default ChooseUsCard;
