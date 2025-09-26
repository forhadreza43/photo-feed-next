"use client";
import { Button, Dialog, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";
import xmark from "@/public/xmark.svg";
import { useRouter } from "next/navigation";

export default function PhotoDetailsModal({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
    router.back();
  }

  return (
    <>
      {/* <Button
        onClick={open}
        className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-black/30"
      >
        Open dialog
      </Button> */}

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none "
        onClose={close}
        __demoMode
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/50 backdrop-blur-sm">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full relative rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <span
                onClick={close}
                className="self-end cursor-pointer text-2xl font-bold hover:text-red-600 absolute right-0 -top-12 bg-white rounded-md p-1 shadow-lg"
              >
                <Image src={xmark} alt="Modal Image" />
              </span>
              {children}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
