import { Photo } from '@/util/defination';
import Image from 'next/image';
import Link from 'next/link';
import { Locale } from '@/app/[lang]/dictionaries';
import { getApiUrl } from '@/util/api-url';

export default async function PhotoCard({ lang }: { lang: Locale }) {
    // const baseUrl =
    //    process.env.BASE_API_URL ||
    //    `${
    //       process.env.VERCEL_URL
    //          ? 'https://' + process.env.VERCEL_URL
    //          : 'http://localhost:3000'
    //    }`;

   const baseUrl = await getApiUrl();
   const photos = await fetch(`${baseUrl}/api/photos`).then((res) =>
      res.json()
   );
   return photos.map((photo: Photo) => (
      <Link
         href={`/${lang}/photos/${photo.id}`}
         className="group"
         key={photo.id}
      >
         <Image
            src={photo.url}
            alt={photo.title}
            width={700}
            height={700}
            priority
         />
         {/* <!-- overlay --> */}
         <div className="title-container">
            <div className="title">{photo.title}</div>
         </div>
      </Link>
   ));
}
