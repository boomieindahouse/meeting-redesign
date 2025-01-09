export default function Vision() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap lg:items-center">
                    {/* Left Sec text */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <p className="text-sm text-gray-600 mb-4 text-start">Vision</p>
                        <h3 className="text-3xl font-serif mb-6 leading-snug">
                            <span className="text-teal-600">Meeting Creative</span> offers
                            expert website design, captivating graphic design, seamless network
                            management, targeted advertising to boost your brand&apos;s online
                            presence and engagement.
                        </h3>
                        <p className="text-gray-700 text-lg mb-6">
                            Vision Statements
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-4">
                                <span className="text-teal-600 text-xl">•</span>
                                <span className="text-gray-800">
                                    Focused on innovation and customer satisfaction
                                </span>
                            </li>
                            <li className="flex items-start space-x-4">
                                <span className="text-teal-600 text-xl">•</span>
                                <span className="text-gray-800">
                                    Emphasizing growth and scalability
                                </span>
                            </li>
                            <li className="flex items-start space-x-4">
                                <span className="text-teal-600 text-xl">•</span>
                                <span className="text-gray-800">
                                    Highlighting comprehensive services
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Right Sec img */}
                    <div className="w-full lg:w-1/2">
                        <div className="rounded-lg overflow-hidden">
                            <img
                                src="/assets/img/visionimg.png"
                                alt="vision img"
                                className="w-[full] h-[auto] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
