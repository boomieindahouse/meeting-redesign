export default function Footer() {
    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto px-4">
                {/* Grid Container */}
                <div className="flex flex-col md:flex-row md:justify-around md:gap-6">
                    {/* Section 1 */}
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-lg font-normal">Meeting Creative Co.,Ltd</h3>
                        <p className="mt-2 text-sm text-gray-500">
                            555/126 Supalai Bella, Moo 4, T. Joho, <br />
                            A. Mueang, Nakhon Ratchasima 30310
                        </p>
                        <p className="mt-2 text-sm text-gray-500">Tel: 044-002221</p>
                    </div>

                    {/* Section 2 */}
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-lg font-normal">Services</h3>
                        <ul className="mt-2 text-sm space-y-1">
                            <li>
                                <a
                                    href="/web-design"
                                    className="text-gray-500 hover:text-gray-300 no-underline"
                                >
                                    Web Design
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/graphic-design"
                                    className="text-gray-500 hover:text-gray-300 no-underline"
                                >
                                    Graphic Design
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/network"
                                    className="text-gray-500 hover:text-gray-300 no-underline"
                                >
                                    Network Service
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Section 3 */}
                    <div>
                        <h3 className="text-lg font-normal">Contact Us</h3>
                        <ul className="mt-2 text-sm space-y-1">
                            <li>
                                <a
                                    href="https://www.facebook.com/meetingcreative"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-gray-300 no-underline"
                                >
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://lin.ee/gYvfSPi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-gray-300 no-underline"
                                >
                                    Line
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/meeting_creative/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-gray-300 no-underline"
                                >
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:contact@meeting.co.th"
                                    className="text-gray-500 hover:text-gray-300 no-underline"
                                >
                                    Email
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-10 border-t border-gray-700 pt-4 text-center">
                    <p className="text-sm mt-2">
                        © Copyright 2024 Meeting Creative All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
