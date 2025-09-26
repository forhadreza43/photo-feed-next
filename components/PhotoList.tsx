import React from "react";
import PhotoCard from "./PhotoCard";
import { Locale } from "@/app/[lang]/dictionaries";

export default function PhotoList({ lang }: { lang: Locale }) {
  return (
    <div className="img-grid">
      <PhotoCard lang={lang} />
    </div>
  );
}
