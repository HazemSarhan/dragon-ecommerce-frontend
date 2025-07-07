export const SkeletonCard = () => (
  <div className="animate-pulse w-[350px] h-full border rounded-xl bg-muted p-4 m-auto md:m-0">
    <div className="h-60 bg-gray-300 rounded mb-4"></div>
    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
    <div className="h-10 bg-gray-300 rounded mt-auto"></div>
  </div>
);
