import PhotoList from "@/components/PhotoList";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<div>Photos Loading...</div>}>
        <PhotoList />
      </Suspense>
    </div>
  );
}
