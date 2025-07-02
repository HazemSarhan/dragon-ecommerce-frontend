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

const MagicCard = ({ title, description, href }) => {
  return (
    <div className="relative overflow-hidden rounded-xl p-[1px] bg-transparent">
      <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] z-0" />

      {/* Card content */}
      <div className="relative z-10 bg-white dark:bg-slate-950 text-black dark:text-white rounded-xl backdrop-blur-3xl p-5 h-full">
        <Card className="bg-transparent shadow-none border-0">
          <CardHeader>
            <div className="absolute top-0 left-0 w-20 h-20 bg-purple-600/80 blur-2xl rounded-full opacity-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Link
              to={href}
              className="text-sm font-medium flex items-center gap-1 text-purple-500 dark:text-purple-300 hover:text-purple-400 transition"
            >
              Shop Now
              <GiShoppingCart />
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MagicCard;
