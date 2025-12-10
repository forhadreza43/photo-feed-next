export default function PhotoCardSkeleton() {
   return (
      <div className="group animate-pulse mb-5">
         {/* Image skeleton */}
         <div className="w-full aspect-square bg-gray-300 rounded-lg"></div>

         {/* Title container skeleton */}
         <div className="title-container">
            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
         </div>
      </div>
   );
}
