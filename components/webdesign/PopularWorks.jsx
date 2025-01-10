"use client"

import React, { useState } from "react";
import Slider from "react-slick";
import { useProjectImages } from "/hooks/useProjectImages";
import { useSlickSettings } from "/composables/useSlickSettings";
import { Icon } from "@iconify/react";

const WebProjectSlickCarousel = () => {
    const { webProjectImages } = useProjectImages();
    const settings = useSlickSettings();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

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

    return (
        <section className="py-4 lg:py-10">
            <div className="container mx-auto px-4">
                <Slider {...settings} className="web-project-slider pb-10">
                    {webProjectImages.map((image, index) => (
                        <div key={index} className="px-3">
                            <div
                                className="transform transition-transform duration-300 cursor-pointer"
                                onClick={() => openModal(image)}
                            >
                                <div className="rounded-lg overflow-hidden max-w-md mx-auto relative group">
                                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10" />
                                    <img
                                        src={image}
                                        alt={`Web Project ${index + 1}`}
                                        className="w-full h-[auto] object-cover"
                                    />
                                    <div className="absolute top-0 right-0 p-3 opacity-0 flex justify-center items-center group-hover:opacity-100 transition-opacity z-20">
                                        <Icon icon="fluent:expand-up-right-20-filled" className="text-3xl text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
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