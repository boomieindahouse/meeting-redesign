import { useState } from 'react';

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
    // Optional: Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
    // Optional: Restore body scrolling when modal is closed
    document.body.style.overflow = 'unset';
  };

  return {
    isModalOpen,
    currentImage,
    openModal,
    closeModal
  };
};