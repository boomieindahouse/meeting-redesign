'use client'

import { useState, useEffect } from 'react';

export default function Introduction() {
    const [isLgScreen, setIsLgScreen] = useState(false);

    useEffect(() => {
        // detect display res function
        const handleResize = () => {
            setIsLgScreen(window.innerWidth >= 1024); //  if display res > 1024px return true
        };

        // เfuction call when start
        handleResize();

        // changed res display fuction
        window.addEventListener('resize', handleResize);

        // remove event when end component
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="py-10 pt-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <video
                            src="/assets/videos/vid.mp4"
                            controls
                            muted
                            loop
                            autoPlay={isLgScreen}
                            className="rounded-xl shadow-xl max-w-full w-full"
                            poster="/assets/img/poster.png"
                        ></video>
                    </div>
                    <div>
                        <p className="text-[8pt] lg:text-sm text-gray-600 mb-4 text-start">Our Story</p>
                        <p className="text-xl lg:text-3xl font-serif mb-6">
                            <span className="text-teal-600">Meeting Creative </span>is a website design company, graphics, networking
                            including online marketing services.
                        </p>
                        <p className='text-sm lg:text-base text-gray-600'>
                            The executives and staff of Meeting Creative Co., Ltd. have more than 7 years of experience
                            Ready to take care of and be by your side.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
