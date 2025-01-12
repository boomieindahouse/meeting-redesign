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
                                className="w-[full] sm:h-96 md:h-[550px] object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* ข้อความ */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <p className="text-[8pt] lg:text-sm text-gray-600 mb-4 text-start">Our services</p>
                    <h3 className="text-xl lg:text-3xl font-serif mb-6 leading-snug">
                        We specialize in expert{" "}
                        <a href="/web-design" className="text-teal-600">website design</a>
                        , captivating{" "}
                        <a href="/graphic-design" className="text-teal-600">graphic design</a>
                        , and seamless{" "}
                        <a href="/network" className="text-teal-600">network service</a>
                        , let us help you create a powerful online presence that stands out.
                    </h3>
                    <p className="text-gray-700 text-[12pt] lg:text-lg mb-6">
                        What will customers get from us?
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-start space-x-4">
                            <span className="text-teal-600 lg:text-xl">•</span>
                            <span className="text-gray-800 text-[12pt] lg:text-base">
                                <span>Expert Service:</span> Professional website design and
                                graphic design.
                            </span>
                        </li>
                        <li className="flex items-start space-x-4">
                            <span className="text-teal-600 lg:text-xl">•</span>
                            <span className="text-gray-800 text-[12pt] lg:text-base">
                                <span>Engaging Online Presence:</span> Captivating and
                                effective digital solutions.
                            </span>
                        </li>
                        <li className="flex items-start space-x-4">
                            <span className="text-teal-600 lg:text-xl">•</span>
                            <span className="text-gray-800 text-[12pt] lg:text-base">
                                <span>Reliable Support:</span> Ongoing assistance and
                                seamless network management.
                            </span>
                        </li>
                    </ul>
                    <div>
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
