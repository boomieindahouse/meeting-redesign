'use client'

import { useState, useEffect } from 'react';

export default function Informative() {
    const [isLgScreen, setIsLgScreen] = useState(false);

    useEffect(() => {
        // check display function
        const handleResize = () => {
            setIsLgScreen(window.innerWidth >= 1024); // if display >= 1024px is true
        };

        // call function when start
        handleResize();

        // resize display fuction
        window.addEventListener('resize', handleResize);

        // remove event listener when component destroy
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="py-10 pt-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <video
                            src="/assets/videos/graphicvid.mp4"
                            controls
                            muted
                            loop
                            autoPlay={isLgScreen}
                            className="rounded-xl shadow-xl max-w-full w-full"
                            poster="/assets/img/webposter.png"
                        ></video>
                    </div>
                    <div>
                        <p className="text-[8pt] lg:text-sm text-gray-600 mb-4 text-start">Informative</p>
                        <p className="text-xl lg:text-3xl font-serif">
                        We excel in providing comprehensive<span className='text-teal-600'> graphic design </span>services, including logo design, banners, posters, book covers, various printed media, as well as online designs, social media covers, and corporate identity branding to elevate your business.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
