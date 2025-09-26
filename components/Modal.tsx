"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import xmark from "@/public/xmark.svg";

export default function Modal({ children }: { children: React.ReactNode }) {
  const modalRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);

  function onHide() {
    // modalRef.current?.close();
    router.back();
  }

  return createPortal(
    <dialog
      ref={modalRef}
      onClose={onHide}
      className="shadow-teal-700 shadow-md border border-teal-600 flex flex-col justify-center items-center p-2 rounded-md"
    >
      <span
        onClick={onHide}
        className="self-end cursor-pointer text-2xl font-bold hover:text-red-600"
      >
        <Image src={xmark} alt="Modal Image" />
      </span>
      {children}
    </dialog>,
    document.getElementById("modal-root") as HTMLElement
  );
}
