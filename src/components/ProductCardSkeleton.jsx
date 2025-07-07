import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const ProductCardSkeleton = () => {
  return (
    <div className="border p-4 rounded shadow space-y-4 animate-pulse">
      <Skeleton className="w-full h-[180px] rounded" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-8 w-full" />
    </div>
  );
};
export default ProductCardSkeleton;
