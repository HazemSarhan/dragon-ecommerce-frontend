export const SkeletonCard = () => (
  <div className="animate-pulse w-[280px] h-full border rounded-xl bg-muted p-4">
    <div className="h-40 bg-gray-300 rounded mb-4"></div>
    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
    <div className="h-10 bg-gray-300 rounded mt-auto"></div>
  </div>
);
