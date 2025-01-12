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
                            src="/assets/videos/networkvid.mp4"
                            controls
                            muted
                            loop
                            autoPlay={isLgScreen}
                            className="rounded-xl shadow-xl max-w-full w-full"
                            poster="/assets/img/networkposter.png"
                        ></video>
                    </div>
                    <div>
                        <p className="text-[8pt] lg:text-sm text-gray-600 mb-4 text-start">Informative</p>
                        <p className="text-xl lg:text-3xl font-serif">
                        Empower your business with our comprehensive<span className='text-teal-600'> network services </span>, ensuring reliable connectivity and robust security for all your digital operations.
                        </p>
                        <a
                            href="https://lin.ee/gYvfSPi"
                            className="inline-block bg-black text-white px-6 py-2 mt-6 text-[10pt] lg:text-lg hover:bg-gray-800 no-underline"
                        >
                            Line contact
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
