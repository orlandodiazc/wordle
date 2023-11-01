import { ReactNode, useEffect, useRef } from "react";
import clsx from "clsx";

export function GameOverModal({
  open,
  closeHandler,
  children,
}: {
  open: boolean;
  closeHandler: () => void;
  children?: ReactNode;
}) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      modalRef.current?.showModal();
    }
  }, [open]);

  function closeModal() {
    modalRef.current?.close();
    closeHandler();
  }

  return (
    <dialog
      ref={modalRef}
      className={clsx(
        "max-w-lg rounded-md bg-neutral-800/70 px-14 py-7 text-white backdrop-blur-sm open:animate-fade-in",
      )}
    >
      {children}
      <footer className="flex justify-center">
        <button
          className="h-11 whitespace-nowrap rounded-md bg-blue-900 px-6 py-2 text-lg font-semibold text-white hover:bg-blue-800  focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-gray-100 disabled:pointer-events-none disabled:opacity-50"
          onClick={closeModal}
        >
          RESTART
        </button>
      </footer>
    </dialog>
  );
}
