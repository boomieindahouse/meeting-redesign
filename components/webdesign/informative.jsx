'use client'

import { useState, useEffect } from 'react';

export default function Informative() {
    const [isLgScreen, setIsLgScreen] = useState(false);

    useEffect(() => {
        // ฟังก์ชันตรวจสอบขนาดหน้าจอ
        const handleResize = () => {
            setIsLgScreen(window.innerWidth >= 1024); // ถ้าขนาดหน้าจอใหญ่กว่าหรือเท่ากับ 1024px ให้เป็น true
        };

        // เรียกฟังก์ชันทันทีเมื่อเริ่มต้น
        handleResize();

        // ฟังการเปลี่ยนขนาดหน้าจอ
        window.addEventListener('resize', handleResize);

        // ลบ event listener เมื่อ component ถูกทำลาย
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="py-10 pt-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <video
                            src="/assets/videos/webvid.mp4"
                            controls
                            muted
                            loop
                            autoPlay={isLgScreen}
                            className="rounded-xl shadow-xl max-w-full w-full"
                            poster="/assets/img/webposter.png"
                        ></video>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-4 text-start">Informative</p>
                        <p className="text-3xl font-serif">
                            <span className='text-teal-600'>We design and develop </span>for a wide range of industries, including for clinic healthcare, e-commerce, entertainment, government, education, hospitality, real estate, and more.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
