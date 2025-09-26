import PhotoList from "@/components/PhotoList";
import { Suspense } from "react";
import { Locale } from "./dictionaries";

export default async function Home({
  params,
}: {
  params: { lang: Locale };
}) {
  const { lang } = await params;

  return (
    <div>
      <Suspense fallback={<div>Photos Loading...</div>}>
        <PhotoList lang={lang} />
      </Suspense>
    </div>
  );
}
