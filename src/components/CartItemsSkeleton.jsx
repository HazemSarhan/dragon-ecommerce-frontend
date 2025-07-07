import { Card } from '@/components/ui/card';

export const SkeletonItem = () => (
  <Card className="p-3 rounded-none mb-5 animate-pulse">
    <div className="flex items-center justify-around gap-5">
      <div className="bg-gray-300 h-[80px] w-[100px] rounded" />
      <div className="flex-1 space-y-3">
        <div className="bg-gray-300 h-5 w-1/2 rounded" />
        <div className="bg-gray-300 h-4 w-1/4 rounded" />
        <div className="bg-gray-300 h-4 w-1/3 rounded" />
      </div>
      <div className="bg-gray-300 h-8 w-20 rounded" />
    </div>
  </Card>
);

export const SkeletonSummary = () => (
  <div className="p-3 space-y-5 animate-pulse">
    <div className="h-6 w-2/3 bg-gray-300 rounded" />
    <div className="h-4 w-1/2 bg-gray-300 rounded" />
    <div className="h-4 w-1/3 bg-gray-300 rounded" />
    <div className="h-4 w-1/3 bg-gray-300 rounded" />
    <div className="h-10 w-full bg-gray-300 rounded" />
    <div className="h-8 w-full bg-gray-300 rounded" />
  </div>
);
