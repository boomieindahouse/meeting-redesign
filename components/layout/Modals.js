import React from "react";

const Modal = ({ isModalOpen, currentImage, closeModal }) => {
  if (!isModalOpen || !currentImage) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 px-10 sm:px-0"
      onClick={closeModal}
    >
      <div
        className="relative w-full max-w-[85vh] mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-white text-3xl z-20"
          onClick={closeModal}
        >
          &times;
        </button>
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={currentImage}
            alt="Expanded project"
            className="max-w-full max-h-[90vh] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;