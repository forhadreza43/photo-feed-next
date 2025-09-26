import { Photo } from "@/util/defination";
import Image from "next/image";
import Link from "next/link";

export default async function PhotoCard() {
  const photos = await fetch(`${process.env.BASE_API_URL}/photos`).then((res) =>
    res.json()
  );
  return photos.map((photo: Photo) => (
    <Link href={`/photos/${photo.id}`} className="group" key={photo.id}>
      <Image src={photo.url} alt={photo.title} width={700} height={700} priority/>
      {/* <!-- overlay --> */}
      <div className="title-container">
        <div className="title">{photo.title}</div>
      </div>
    </Link>
  ));
}
