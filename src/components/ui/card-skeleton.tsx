import { Skeleton } from './skeleton';
import { Card } from './card';

export const ServiceCardSkeleton = () => {
  return (
    <Card className="relative overflow-hidden animate-pulse">
      <div className="relative h-96">
        <Skeleton className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
          <Skeleton className="h-6 w-3/4 mb-3 bg-white/20" />
          <Skeleton className="h-4 w-full mb-2 bg-white/20" />
          <Skeleton className="h-4 w-5/6 mb-6 bg-white/20" />
          
          <div className="space-y-2 mb-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center">
                <Skeleton className="w-4 h-4 mr-2 bg-white/20" />
                <Skeleton className="h-3 w-24 bg-white/20" />
              </div>
            ))}
          </div>
          
          <div className="flex items-center justify-between">
            <Skeleton className="h-5 w-32 bg-white/20" />
            <Skeleton className="h-8 w-24 bg-white/20" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export const TestimonialCardSkeleton = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center mb-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <Skeleton key={i} className="w-5 h-5 mr-1" />
        ))}
      </div>
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-4/5 mb-4" />
      <Skeleton className="h-4 w-32" />
    </Card>
  );
};

export const GalleryImageSkeleton = () => {
  return (
    <div className="relative overflow-hidden rounded-xl">
      <Skeleton className="w-full h-64 md:h-80" />
    </div>
  );
};