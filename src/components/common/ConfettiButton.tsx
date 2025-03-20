"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import CustomButton from "./CustomButton";

interface ConfettiButtonProps {
  buttonText: string;
  modalTitle: string;
  modalMessage: string;
  buttonClassName?: string;
}

export default function ConfettiButton({
  buttonText,
  modalTitle,
  modalMessage,
  buttonClassName = "py-2 px-4 text-sm md:text-base font-medium text-white bg-gray-500 rounded-lg hover:bg-gray-600 cursor-pointer transition",
}: ConfettiButtonProps) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    confetti({
      particleCount: 200,
      spread: 70,
      origin: { y: 0.6 },
    });

    setShowModal(true);
  };

  return (
    <>
      <CustomButton
        fullWidth
        text={buttonText}
        onClick={handleClick}
        className={buttonClassName}
      />

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-lg shadow-xl text-center max-w-sm w-full">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              {modalTitle}
            </h2>
            <p className="text-gray-700 mb-4">{modalMessage}</p>
            <CustomButton text="Close" onClick={() => setShowModal(false)} />
          </div>
        </div>
      )}
    </>
  );
}
