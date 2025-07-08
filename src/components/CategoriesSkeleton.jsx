import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';

export const CategoriesSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-xl p-[1px] bg-transparent animate-pulse"
        >
          <div className="relative z-10 bg-white dark:bg-slate-950 text-black dark:text-white rounded-xl backdrop-blur-3xl p-5 h-full">
            <Card className="bg-transparent shadow-none border-0">
              <CardHeader>
                <div className="absolute top-0 left-0 w-20 h-20 bg-purple-600/80 blur-2xl rounded-full opacity-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                <CardTitle className="h-4 w-1/2 bg-gray-300 dark:bg-zinc-700 rounded mb-2" />
                <CardDescription className="h-3 w-3/4 bg-gray-200 dark:bg-zinc-800 rounded" />
              </CardHeader>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
};
