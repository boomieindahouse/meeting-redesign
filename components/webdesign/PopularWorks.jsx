"use client"

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useProjectImages } from "/hooks/useProjectImages";
import { Icon } from "@iconify/react";

// Import CSS สำหรับ Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// ใช้ Composables สำหรับการตั้งค่า Swiper
import { useSwiperSettings } from "/composables/useSwiperSettings";

const WebProjectSwiperCarousel = () => {
  const { webProjectImages } = useProjectImages();
  const swiperSettings = useSwiperSettings();  // ใช้การตั้งค่าจาก useSwiperSettings

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false); // สถานะการลาก

  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
    document.body.style.overflow = 'unset';
  };

  const handleMouseDown = () => {
    setIsDragging(true); // เริ่มต้นการลาก
  };

  const handleMouseUp = () => {
    setIsDragging(false); // หยุดการลาก
  };

  const handleImageClick = (e, image) => {
    if (!isDragging) { // ถ้าไม่ใช่การลาก
      openModal(image);
    }
  };

  return (
    <section className="pb-10 lg:py-16">
      <div className="container mx-auto px-4">
        <Swiper {...swiperSettings} className="web-project-slider pb-10">
          {webProjectImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="transform transition-transform duration-300 cursor-pointer"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onClick={(e) => handleImageClick(e, image)} // คลิกเมื่อไม่ได้ลาก
              >
                <div className="rounded-lg overflow-hidden max-w-md mx-auto relative group">
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10" />
                  <img
                    src={image}
                    alt={`Web Project ${index + 1}`}
                    className="w-full h-[auto] object-cover"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 opacity-0 flex justify-center items-center group-hover:opacity-100 transition-opacity z-20">
                    <Icon icon="fluent:expand-up-right-20-filled" className="text-3xl text-white" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {isModalOpen && currentImage && (
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
      )}
    </section>
  );
};

export default WebProjectSwiperCarousel;