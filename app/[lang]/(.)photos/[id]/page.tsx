import Modal from "@/components/Modal";
import PhotoDetails from "@/components/PhotoDetails";
import { Locale } from "../../dictionaries";
import PhotoDetailsModal from "@/components/PhotoDetailsModal";

export default async function PhotoModal({
  params,
}: {
  params: { id: string; lang: Locale };
}) {
  const { id, lang } = await params;

  return (
    
    <div className="">
        {/* <Modal>
          <PhotoDetails id={id} lang={lang} />
        </Modal> */}
        <PhotoDetailsModal>
            <PhotoDetails id={id} lang={lang} />
        </PhotoDetailsModal>
          
    </div>
  );
}
