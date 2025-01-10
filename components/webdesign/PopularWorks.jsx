"use client"

import React from "react";
import Slider from "react-slick";
import { useProjectImages } from "/hooks/useProjectImages";
import { useSlickSettings } from "/composables/useSlickSettings"; // นำเข้าการตั้งค่าจาก composable

const WebProjectSlickCarousel = () => {
  const { webProjectImages } = useProjectImages();
  const settings = useSlickSettings(); // ใช้การตั้งค่าจาก composable

  return (
    <section className="py-4 lg:py-10">
      <div className="container mx-auto px-4">
        <Slider {...settings} className="web-project-slider pb-10">
          {webProjectImages.map((image, index) => (
            <div key={index} className="px-3"> {/* ลด padding ข้าง */}
              <div className="transform transition-transform duration-300">
                <div className="rounded-lg overflow-hidden max-w-md mx-auto">
                  <img
                    src={image}
                    alt={`Web Project ${index + 1}`}
                    className="w-full h-[auto] object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx>{`        
        :global(.web-project-slider .slick-center) {
          opacity: 1;
        }

        :global(.web-project-slider .slick-dots) {
          bottom: -10px;
        }

        @media (max-width: 768px) {
          :global(.web-project-slider .slick-dots) {
            bottom: 0px;
          }
        }

         @media (max-width: 1024px) {
          :global(.web-project-slider .slick-dots) {
            bottom: 0px;
          }
        }

        :global(.web-project-slider .slick-dots li button:before) {
          font-size: 8px;
          color: #666;
        }

        :global(.web-project-slider .slick-dots li.slick-active button:before) {
          color: #238795;
        }

        :global(.web-project-slider) {
          max-width: 1200px;
          margin: 0 auto;
        }
      `}</style>
    </section>
  );
};

export default WebProjectSlickCarousel;
