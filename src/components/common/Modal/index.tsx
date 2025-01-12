import React from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Description,
} from "@headlessui/react";

export interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
  children?: React.ReactNode;
}

export const Modal = ({ isOpen, setIsOpen, title, children }: ModalProps) => (
  <Dialog
    open={isOpen}
    onClose={() => setIsOpen(false)}
    className="relative z-50"
  >
    <DialogBackdrop
      transition
      className="fixed inset-0 bg-black/30 duration-300 ease-out data-[closed]:opacity-0"
    />
    <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
      <DialogPanel
        transition
        className="flex w-full flex-col space-y-4 bg-white p-12 duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 sm:w-[640px] sm:min-w-[640px]"
      >
        <DialogTitle className="text-lg font-bold">{title}</DialogTitle>
        {/* <Description>{}</Description> */}
        <div className="flex w-full">{children}</div>
      </DialogPanel>
    </div>
  </Dialog>
);
