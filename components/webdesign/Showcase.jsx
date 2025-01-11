export default function Showcase() {
    return (
        <section className="py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap lg:items-center">
                    {/* Left Sec text */}
                    <div className="w-full lg:w-2/3 lg:ml-20 flex flex-col justify-center">
                        <p className="text-[8pt] lg:text-sm text-gray-600 mb-4 text-start">Show case</p>
                        <h3 className="text-xl lg:text-3xl font-serif mb-6 leading-snug">
                            <span className="text-teal-600">Meeting Creative</span> provides
                            expert website design, captivating graphic design, seamless network
                            management, targeted advertising to boost your brand&apos;s online
                            presence and engagement.
                        </h3>
                        <p className="text-gray-700 text-[10pt] lg:text-lg mb-6">
                            Our Process
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-4">
                            <span className="text-teal-600 lg:text-xl">•</span>
                            <span className="text-gray-800 text-[10pt] lg:text-base">
                                <span>Discovery Phase:</span> We collaborate with clients to understand their needs and vision.
                            </span>
                            </li>
                            <li className="flex items-start space-x-4">
                            <span className="text-teal-600 lg:text-xl">•</span>
                            <span className="text-gray-800 text-[10pt] lg:text-base">
                                <span>Design and Development:</span> Our team creates innovative designs and develops robust solutions.
                            </span>
                            </li>
                            <li className="flex items-start space-x-4">
                            <span className="text-teal-600 lg:text-xl">•</span>
                            <span className="text-gray-800 text-[10pt] lg:text-base">
                                <span>Continuous Support:</span> We provide ongoing support and maintenance to ensure your success.
                            </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
