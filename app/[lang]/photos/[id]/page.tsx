import PhotoDetails from "@/components/PhotoDetails";
import React, { Suspense } from "react";
import { Locale } from "../../dictionaries";

export default async function page({
  params,
}: {
  params: { id: string; lang: Locale };
}) {
  const { id, lang } = await params;

  return (
    <Suspense fallback={<div>Details Loading...</div>}>
      <PhotoDetails id={id} lang={lang} />
    </Suspense>
  );
}
