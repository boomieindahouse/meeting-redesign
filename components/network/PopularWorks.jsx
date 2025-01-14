"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules"; // นำเข้า Scrollbar module
import { useProjectImages } from "/hooks/useProjectImages";
import { Icon } from "@iconify/react";

// Import CSS สำหรับ Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar"; // นำเข้า CSS สำหรับ Scrollbar

// ใช้ Composables สำหรับการตั้งค่า Swiper
import { useSwiperSettings } from "/composables/useSwiperSettings";
import { useModal } from "/composables/useModal"; // นำเข้า useModal

// นำเข้า Modal component
import Modal from "/components/layout/Modals";

const WebProjectSwiperCarousel = () => {
  const { networkProjectImages } = useProjectImages();
  
  // ใช้ useModal เพื่อจัดการกับ Modal
  const { isModalOpen, currentImage, openModal, closeModal } = useModal();

  // ใช้การตั้งค่าของ Swiper พร้อม Scrollbar
  const swiperSettings = {
    ...useSwiperSettings(),
    modules: [Scrollbar], // เพิ่ม Scrollbar module
    scrollbar: {
      el: ".swiper-scrollbar", // อ้างอิงถึง Scrollbar
      draggable: true, // อนุญาตให้ลาก Scrollbar ได้
    },
  };

  const [isDragging, setIsDragging] = useState(false); // สถานะการลาก

  const handleMouseDown = () => {
    setIsDragging(true); // เริ่มต้นการลาก
  };

  const handleMouseUp = () => {
    setIsDragging(false); // หยุดการลาก
  };

  const handleImageClick = (e, image) => {
    if (!isDragging) {
      openModal(image);
    }
  };

  return (
    <section className="pb-10 lg:py-16">
      <div className="container mx-auto px-4">
        <Swiper {...swiperSettings} className="web-project-slider pb-10">
          {networkProjectImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="transform transition-transform duration-300 cursor-pointer"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onClick={(e) => handleImageClick(e, image)}
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
          {/* Scrollbar Element */}
          <div
            className="swiper-scrollbar"
            style={{
              marginTop: "20px", // เพิ่มระยะห่างจาก Swiper Content
              height: "3px", // ปรับความสูงของ Scrollbar
              backgroundColor: "rgba(0, 0, 0, 0.2)", // สีพื้นหลังของ Scrollbar
              borderRadius: "5px", // ทำมุมของ Scrollbar ให้โค้งมน
              position: "relative", // กำหนดให้ scrollbar อยู่ภายใน Swiper
            }}
          />
        </Swiper>
      </div>

      {/* แสดง Modal ถ้าเปิดใช้งาน */}
      <Modal 
        isModalOpen={isModalOpen} 
        currentImage={currentImage} 
        closeModal={closeModal} 
      />
    </section>
  );
};

export default WebProjectSwiperCarousel;
