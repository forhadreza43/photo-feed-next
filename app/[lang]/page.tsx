import PhotoList from "@/components/PhotoList";
import { Suspense } from "react";
import { Locale } from "./dictionaries";
import GallerySkeleton from "@/components/skeleton/GallerySkeleton";

export default async function Home({
  params,
}: {
  params: { lang: Locale };
}) {
  const { lang } = await params;

  return (
    <div>
      <Suspense fallback={<GallerySkeleton />}>
        <PhotoList lang={lang} />
      </Suspense>
    </div>
  );
}
