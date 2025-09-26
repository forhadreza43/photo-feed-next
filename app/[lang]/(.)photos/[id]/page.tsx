import Modal from "@/components/Modal";
import PhotoDetails from "@/components/PhotoDetails";
import { Locale } from "../../dictionaries";

export default async function PhotoModal({
  params,
}: {
  params: { id: string; lang: Locale };
}) {
  const { id, lang } = await params;

  return (
    
    <div className="w-full h-full flex justify-center items-center relative">
        <Modal>
          <PhotoDetails id={id} lang={lang} />
        </Modal>
    </div>
  );
}
