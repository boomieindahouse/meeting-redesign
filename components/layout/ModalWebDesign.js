import { Icon } from "@iconify/react";

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
        <div className="relative w-full h-full flex flex-col items-center">
          <img
            src={currentImage.preview}
            alt={currentImage.name}
            className="max-w-full max-h-[90vh] rounded-lg"
          />
          <div className="mt-4 text-white text-lg font-semibold">
            {/* คลิกที่ชื่อโปรเจ็กต์เพื่อเปิดลิงค์ */}
            <a 
              href={currentImage.website} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="no-underline lg:hover:text-teal-500 hover:duration-500"
            >
              {currentImage.name}
            </a>
          </div>
          {/* ปุ่ม Link สำหรับโปรเจ็กต์ */}
          <a 
            href={currentImage.website} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-2 text-white text-lg font-semibold hover:underline"
          >
            <Icon icon="fluent:world-24-regular" className="text-white text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
