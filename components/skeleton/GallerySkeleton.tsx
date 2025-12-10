import React from 'react';
import PhotoCardSkeleton from './PhotoCardSkeleton';

export default function GallerySkeleton() {
   return (
      <div className="img-grid">
         {Array.from({ length: 6 }).map((_, index) => (
            <PhotoCardSkeleton key={index}></PhotoCardSkeleton>
         ))}
      </div>
   );
}
