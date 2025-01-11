export default function Showcase() {
    return (
        <section className="py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap lg:items-center">
                    {/* Left Sec text */}
                    <div className="w-full lg:w-2/3 lg:ml-20 flex flex-col justify-center">
                        <p className="text-[8pt] lg:text-sm text-gray-600 mb-4 text-start">Show case</p>
                        <h3 className="text-xl lg:text-3xl font-serif mb-6 leading-snug">
                        Explore our standout ads, banners, logos, and business cards. See the impact of our{" "} 
                        <span className="text-teal-600">creative designs.</span>
                        </h3>
                        <p className="text-gray-700 text-[10pt] lg:text-lg mb-6">
                            Our Process
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-4">
                            <span className="text-teal-600 lg:text-xl">•</span>
                            <span className="text-gray-800 text-[10pt] lg:text-base">
                                <span>Consultation and Research:</span> We dive deep into your brand’s identity and goals to ensure our designs are perfectly aligned with your vision.
                            </span>
                            </li>
                            <li className="flex items-start space-x-4">
                            <span className="text-teal-600 lg:text-xl">•</span>
                            <span className="text-gray-800 text-[10pt] lg:text-base">
                                <span>Review and Refinement:</span> We collaborate with you to fine-tune the designs, ensuring they meet your expectations and requirements.
                            </span>
                            </li>
                            <li className="flex items-start space-x-4">
                            <span className="text-teal-600 lg:text-xl">•</span>
                            <span className="text-gray-800 text-[10pt] lg:text-base">
                                <span>Ongoing Design Services:</span> We provide continuous design support and updates to keep your brand fresh and engaging. 
                            </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
