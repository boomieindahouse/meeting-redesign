"use client"

import React, { useEffect, useState } from 'react';
import { usePartners } from "../../hooks/usePartners";

const Clients = () => {
  const { partners } = usePartners();
  const [isPaused, setIsPaused] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [pausedPosition, setPausedPosition] = useState(0);
  const [pausedTime, setPausedTime] = useState(0);

  const firstRow = partners.slice(0, Math.ceil(partners.length / 2));
  const secondRow = partners.slice(Math.ceil(partners.length / 2));

  const duplicatedFirstRow = [...firstRow, ...firstRow];
  const duplicatedSecondRow = [...secondRow, ...secondRow];

  useEffect(() => {
    let animationFrameId;
    let startTime;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const duration = isMobile ? 10000 : 45000;

    const animate = (timestamp) => {
      if (!startTime) {
        // เมื่อเริ่มต้นใหม่ ให้คำนวณ startTime จากตำแหน่งที่หยุดไว้
        startTime = timestamp - (pausedPosition * duration);
      }

      if (isPaused) {
        // เมื่อหยุด เก็บตำแหน่งและเวลาปัจจุบันไว้
        setPausedPosition(scrollPosition);
        setPausedTime(timestamp);
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      const progress = (timestamp - startTime) / duration;
      const newPosition = progress % 1;
      setScrollPosition(newPosition);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPaused, pausedPosition]);

  const getTransform = () => {
    const translateX = -scrollPosition * 100;
    return `translateX(${translateX}%)`;
  };

  const containerStyles = "relative overflow-hidden";
  const rowStyles = "flex md:gap-8 gap-4 whitespace-nowrap";
  const logoContainerStyles = "flex items-center justify-center p-2 md:p-4 transition-transform hover:scale-105 min-w-[100px] md:min-w-[150px]";
  const logoStyles = "h-20 lg:h-full w-auto object-contain";

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="container mx-auto px-2 md:px-4 w-full py-4 md:py-8">
      <p className="text-[8pt] lg:text-sm text-gray-600 mb-2 md:mb-4 text-start">Our clients</p>
      <p className="text-xl lg:text-3xl font-serif mb-6 lg:mb-6">
        We take pride in collaborating with a diverse group of esteemed clients and striving to deliver exceptional results for their unique needs. Here are some of the companies that trust us:
      </p>
      <div
        className={containerStyles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={rowStyles}
          style={{
            transform: getTransform(),
          }}
        >
          {duplicatedFirstRow.map((partner, index) => (
            <div key={`row1-${index}`} className={logoContainerStyles}>
              <img
                src={partner.logo_url}
                alt={`Partner ${index + 1}`}
                className={logoStyles}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className={`${containerStyles} mt-4 md:mt-12`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={rowStyles}
          style={{
            transform: getTransform(),
          }}
        >
          {duplicatedSecondRow.map((partner, index) => (
            <div key={`row2-${index}`} className={logoContainerStyles}>
              <img
                src={partner.logo_url}
                alt={`Partner ${index + 1}`}
                className={logoStyles}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;