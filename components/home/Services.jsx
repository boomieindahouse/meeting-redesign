export default function Services() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-6 md:px-12 lg:px-16 flex flex-wrap">
                {/* รูปภาพ */}
                <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
                    <div className="grid grid-cols-1 gap-4">
                        <div className="rounded-lg overflow-hidden">
                            <img
                                src="/assets/img/servicemockup.png"
                                alt="Mock up pic"
                                className="w-[full] h-[550px] object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* ข้อความ */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <h2 className="text-base text-gray-600 mb-4">Services</h2>
                    <h3 className="text-3xl font-serif mb-6 leading-snug">
                        <span className="text-teal-600">Meeting Creative</span> offers
                        expert website design, captivating graphic design, seamless network
                        management, and targeted advertising to boost your brand&apos;s online
                        presence and engagement.
                    </h3>
                    <p className="text-gray-700 text-lg mb-6">
                        What will customers get from us?
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-start space-x-4">
                            <span className="text-teal-600 text-xl">•</span>
                            <span className="text-gray-800">
                                <strong>Expert Service:</strong> Professional website design and
                                graphic design.
                            </span>
                        </li>
                        <li className="flex items-start space-x-4">
                            <span className="text-teal-600 text-xl">•</span>
                            <span className="text-gray-800">
                                <strong>Engaging Online Presence:</strong> Captivating and
                                effective digital solutions.
                            </span>
                        </li>
                        <li className="flex items-start space-x-4">
                            <span className="text-teal-600 text-xl">•</span>
                            <span className="text-gray-800">
                                <strong>Reliable Support:</strong> Ongoing assistance and
                                seamless network management.
                            </span>
                        </li>
                    </ul>
                    <div>
                        <a
                            href="/contact"
                            className="inline-block bg-black text-white px-8 py-3 mt-6 text-lg hover:bg-gray-800 transition-colors"
                        >
                            Contact us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}