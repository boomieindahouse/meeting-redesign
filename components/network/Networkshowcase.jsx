export default function Showcase() {
    return (
        <section className="py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap lg:items-center">
                    {/* Left Sec text */}
                    <div className="w-full lg:w-3/3 flex flex-col justify-center">
                        <p className="text-[8pt] lg:text-sm text-gray-600 mb-4 text-start">Show case</p>
                        <h3 className="text-xl lg:text-3xl font-serif mb-6 leading-snug">
                            Discover our expert services in switching hubs, Mikrotik configurations, CCTV installations, and LAN networks. Enhance your business today.
                        </h3>
                        <p className="text-gray-700 text-[12pt] lg:text-lg mb-6">
                            Our Process
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-4">
                                <span className="text-teal-600 lg:text-xl">•</span>
                                <span className="text-gray-800 text-[12pt] lg:text-base">
                                    <span>Consultation and Assessment:</span> Understand your business needs and evaluate your current network setup.
                                </span>
                            </li>
                            <li className="flex items-start space-x-4">
                                <span className="text-teal-600 lg:text-xl">•</span>
                                <span className="text-gray-800 text-[12pt] lg:text-base">
                                    <span>Design and Implementation:</span> Create and implement a tailored network solution.
                                </span>
                            </li>
                            <li className="flex items-start space-x-4">
                                <span className="text-teal-600 lg:text-xl">•</span>
                                <span className="text-gray-800 text-[12pt] lg:text-base">
                                    <span>Monitoring and Maintenance:</span> Provide ongoing network monitoring and support.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
