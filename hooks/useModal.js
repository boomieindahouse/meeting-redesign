import { useState } from "react";

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (image) => {
    setCurrentImage(image); // ตั้งค่าภาพที่ต้องการแสดงใน Modal
    setIsModalOpen(true); // เปิด Modal
  };

  const closeModal = () => {
    setCurrentImage(null); // เคลียร์ข้อมูลภาพใน Modal
    setIsModalOpen(false); // ปิด Modal
  };

  return {
    isModalOpen,
    currentImage,
    openModal,
    closeModal,
  };
};
